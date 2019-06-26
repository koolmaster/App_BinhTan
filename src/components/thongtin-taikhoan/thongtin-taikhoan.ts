import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginService } from '../../providers/service/loginService';
import { AuthService } from '../../providers/service/utils/core/auth.service';
@Component({
  selector: 'thongtin-taikhoan',
  templateUrl: 'thongtin-taikhoan.html'
})
export class ThongtinTaikhoanComponent {

  text: string;
  userinfo: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public loginService: LoginService,
    public authService: AuthService
  ) {
    this.userinfo = [];
    console.log('Hello ThongtinTaikhoanComponent Component');
    this.text = 'Hello World';
  }

  ionViewDidLoad() {
    this.getUserinfo();
  }

  getUserinfo() {
    this.storage.get('UserInfo').then((val) => {
      //  debugger;
      if (val != null) {
        //     this.loginService.getUserInfo({UserId:'uX3LY5Njzuh0mgZhnwHArBn2UEL2'}).then(
        this.loginService.getUserInfo({ UserId: val.FireBaseID }).then(
          res => {
            debugger;
            this.userinfo = res;
            console.log(this.userinfo);
          },
          err => {
          }
        );
      }

    });
  }
}
