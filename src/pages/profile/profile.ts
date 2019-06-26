import { CanhanPage } from './../canhan/canhan';
import { AuthService } from './../core/auth.service';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThongtinTaikhoanComponent } from '../../components/thongtin-taikhoan/thongtin-taikhoan';
import { TabsPage } from '../tabs/tabs';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  flatLogin = 1;
  currentuser:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private nativePageTransitions: NativePageTransitions,
    public storage: Storage,
    public authService: AuthService) {
      this.currentuser = [];
  }
 ionViewDidEnter() {
    // this.storage.get('UserInfo').then((val) => {
    //   if(val!=null){
    //   this.flatLogin = 1;
    //   this.currentuser =  val;
    //   }
    //   else this.flatLogin = 0;
    // });
  }
  ionViewDidLeave(){
  //   let options: NativeTransitionOptions = {
  //     direction: 'right',
  //     duration: 500,
  //     slowdownfactor: 3,
  //     slidePixels: 20,
  //     iosdelay: 100,
  //     androiddelay: 150,
  //     fixedPixelsTop: 0,
  //     fixedPixelsBottom: 60
  //    }
  
  //  this.nativePageTransitions.slide(options)
  
  }

  goPage(type) {
    this.navCtrl.push(CanhanPage);
  }

  Login(){
    this.navCtrl.setRoot(LoginPage);
  }
  Logout(){
    this.storage.remove('UserInfo');
    this.authService.doLogout()
    .then((res) => {
      this.navCtrl.setRoot(LoginPage);
    }, (error) => {
      console.log("Logout error", error);
    });
  }

}
