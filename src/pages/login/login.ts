import { LoginService } from './../../providers/service/loginService';
import { Component } from '@angular/core';
import { IonicPage,App, NavController, NavParams } from 'ionic-angular';
import { AlertService } from "../../providers/service/alertService";
import { TabsPage } from './../tabs/tabs';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../providers/service/utils/core/auth.service';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  tabBarElement: any;
  txtName: any;
  txtPassword: any;
  txtTaikhoan: any;
  txtRepeatPassword: any;
  iNumber = Math.floor(Math.random() * 10000);
  doneA = true;
  check = 'phone';
  show = 0;
  flatLogin = 0;
  loginForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  constructor(
    public navCtrl: NavController,
    // public authService: AuthService,
    public formBuilder: FormBuilder,
    public app: App,
    public navParams: NavParams,
    private alert: AlertService,
    public loginService : LoginService
  ) {
    let elements = document.querySelectorAll(".tabbar");

    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'none';
      });
    }
  }

  ionViewDidLoad() {

  }
  ionViewWillLoad(){
    this.loginForm = this.formBuilder.group({
      email: new FormControl(),
      password: new FormControl(),
    });
  }
 
  // tryLogin(value){
  //   this.authService.doLogin(value)
  //   .then(res => {
  //     console.log(res);
      
  //     this.navCtrl.setRoot(TabsPage);
  //   }, err => {
  //     console.log(err);
  //     this.errorMessage = err.message;
  //   })
  // }
  // tryRegister(){
  //   var formregister= {
  //     email: this.txtTaikhoan,
  //     password: this.txtPassword
  //   }
  //   this.authService.doRegisterEmail(formregister)
  //    .then(res => {
  //      this.errorMessage = "";
  //      this.successMessage = "Tài khoản của bạn được tạo thành công. Vui lòng đăng nhập!";
  //      alert("Tài khoản của bạn được tạo thành công. Vui lòng đăng nhập!");
  //    }, err => {
  //      this.errorMessage = err.message;
  //      this.successMessage = "";
  //    })
  // }
  // tryFacebookLogin(){
  //   this.authService.doFacebookLogin()
  //   .then((res) => {
  //     this.alert.showToast('success', 'Đăng nhập thành công');
  //     this.navCtrl.setRoot(TabsPage);
  //   }, (err) => {
  //     this.errorMessage = err.message;
  //   });
  // }

  // tryGoogleLogin(){
  //   this.authService.doGoogleLogin()
  //   .then((res) => {
  //     this.alert.showToast('success', 'Đăng nhập thành công');
  //     this.navCtrl.setRoot(TabsPage);
  //   }, (err) => {
  //     this.errorMessage = err.message;
  //   });
  // }
  login() {
    this.alert.showToast('success', 'Đăng nhập thành công');
    this.navCtrl.setRoot(TabsPage);
  }

  goAround($number) {
    this.show = $number;
  }

}
