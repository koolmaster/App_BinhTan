import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Events, AlertController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { LoginService } from '../providers/service/loginService';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

export interface PageInterface {
  title: string;
  component: any;
  index?: number;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  textDir: string = "ltr";
  activePage: any; 
  rootPage: any = 'ChaomungPage';
  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public events: Events,
    public storage: Storage,
    private alertCtrl: AlertController,
    public menuCtrl: MenuController,
    private localNotifications: LocalNotifications,
    public translate: TranslateService,
    private loginService: LoginService,
  ) {
    translate.setDefaultLang('vn');
    translate.use('vn');
    this.menuCtrl.close();
    this.menuCtrl.enable(false, 'myMenu');
    this.menuCtrl.swipeEnable(false);
    this.platform.ready().then(() => {
      this.rootPage = 'ChaomungPage';
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // statusBar.styleDefault();
      this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
      {
        this.textDir = event.lang == 'ar'? 'rtl' : 'ltr';
      });
      this.splashScreen.hide();
      // this.localNotifications.hasPermission().then(data => {
      //   console.log(data);
      //   if (data == true) {
      //     let token: any;
      //     this.fcm.getToken().then(tokenG => {
      //       if (tokenG == null || tokenG == undefined) {
      //         this.fcm.onTokenRefresh().subscribe(tokenO => {
      //           token = tokenO;
      //         });
      //       } else {
      //         token = tokenG;
      //       }
      //       this.setOSKey(token);
      //       let typeDevice;
      //       if (this.platform.is('ios')) {
      //         typeDevice = 2;
      //       } else if (this.platform.is('android')) {
      //         typeDevice = 1;
      //       }
      //       let paramsFirebase = {
      //         UserID: 0,
      //         UserName: "App Công Dân",
      //         OSKey: token,
      //         TypeDevice: typeDevice
      //       }
      //       this.loginService.saveFireBase(paramsFirebase).then(data=>{
      //         console.log(data);
      //       })
      //       console.log(token);
      //     });
      //   }
      // });
    });
  }
 
  logout() {
    let alert = this.alertCtrl.create({
      title: 'Đăng xuất',
      message: 'Bạn có muốn đăng xuất?',
      buttons: [
        {
          text: 'Thoát',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Đồng ý',
          handler: () => {
            this.nav.setRoot('TabsPage');
            this.storage.remove('account');
            this.storage.remove('info');
          }
        }
      ]
    });
    alert.present();
  }
  setOSKey(data: any): void {
    this.storage.set("osKey", data);
  }
}

