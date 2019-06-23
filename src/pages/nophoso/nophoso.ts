import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, Events } from 'ionic-angular';
import { AlertService } from '../../providers/service/alertService';
import { isEmpty, isNil } from 'lodash'
@IonicPage()
@Component({
  selector: 'page-nophoso',
  templateUrl: 'nophoso.html',
})
export class NophosoPage {
  step: any;
  stepCondition: any;
  stepDefaultCondition: any;
  currentStep: any;
  param = {
    sobiennhan: 1,
    type: 1
  }
  hosodetail: any;
  myDate = "2019-06-19";
  disabled = false;
  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public alert: AlertService,
    public evts: Events
  ) {
    this.step = 1;//The value of the first step, always 1
    this.stepCondition = false;//Set to true if you don't need condition in every step
    this.stepDefaultCondition = this.stepCondition;//Save the default condition for every step
    //You can subscribe to the Event 'step:changed' to handle the current step
    this.evts.subscribe('step:changed', step => {
      //Handle the current step if you need
      this.currentStep = step;
      //Set the step condition to the default value
      this.stepCondition = this.stepDefaultCondition;
    });
    this.evts.subscribe('step:next', () => {
      this.checkInput();
      if (this.currentStep == 3 && this.disabled == true) {
        this.stepCondition = false;
      }
    });
    this.evts.subscribe('step:back', () => {
      this.checkInput();
    });
    this.checkInput();
  }

  ionViewDidLoad() {
    if (this.param.type == 2) {
      if (isNil(this.param.sobiennhan) || isEmpty(this.param.sobiennhan)) {
        this.disabled = true;
        this.stepCondition = true;
      }
      let today = new Date();
      let day = today.getDate();
      let mon = today.getMonth() + 1;
      let year = today.getFullYear();
      this.hosodetail = {
        HoTenNguoiNop: "",
        GioiTinh: 0,
        NgaySinh: day,
        ThangSinh: mon,
        NamSinh: year,
        DienThoaiNguoiNop: "",
        EmailNguoiNop: "",
        LoaiGiayToID: "",
        SoGiayToTuyThan: "",
        HoKhauThuongTru: "",
        DiaChiDangKy: "",
        SoNha: "",
        PhuongID: "",
        QuanID: "",
        QuocGiaID: ""
      }
      this.myDate = this.hosodetail.NamSinh + "-" + this.hosodetail.ThangSinh + "-" + this.hosodetail.NgaySinh;
      this.myDate = new Date(this.myDate).toISOString();
    }
    else {
      let today = new Date();
      let day = today.getDate();
      let mon = today.getMonth() + 1;
      let year = today.getFullYear();
      this.hosodetail = {
        HoTenNguoiNop: "",
        GioiTinh: 0,
        NgaySinh: day,
        ThangSinh: mon,
        NamSinh: year,
        DienThoaiNguoiNop: "",
        EmailNguoiNop: "",
        LoaiGiayToID: "",
        SoGiayToTuyThan: "",
        HoKhauThuongTru: "",
        DiaChiDangKy: "",
        SoNha: "",
        PhuongID: "",
        QuanID: "",
        QuocGiaID: ""
      }
      this.myDate = this.hosodetail.NamSinh + "-" + this.hosodetail.ThangSinh + "-" + this.hosodetail.NgaySinh;
      this.myDate = new Date(this.myDate).toISOString();
    }
  }
  onFinish() {
    this.alertCtrl.create({
      message: 'Nộp hồ sơ thành công',
      title: 'Congrats!!',
      buttons: [{
        text: 'Ok'
      }]
    }).present();
    this.viewCtrl.dismiss();
  }

  checkInput() {
    if (!isNil(this.hosodetail) || !isEmpty(this.hosodetail)) {
      if (this.hosodetail.HoTenNguoiNop == '' || this.hosodetail.LoaiGiayToID == '' || this.hosodetail.DienThoaiNguoiNop == '' || this.hosodetail.SoGiayToTuyThan == '') {
        this.stepCondition = false;
      } else {
        this.stepCondition = true;
      }
    }
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
