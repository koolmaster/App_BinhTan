import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuanLyHoSoService } from '../../providers/service/quanLyhoso'
import { isEmpty, isNil } from 'lodash'; 

import { AlertService } from '../../providers/service/alertService';

import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-tracuu-hoso',
  templateUrl: 'tracuu-hoso.html',
})
export class TracuuHosoPage {
  show = false;
  txtVBPL = '';
  chitiethoso:any;
  khongtimthayhoso:any;
  options :BarcodeScannerOptions;
  public dulieuqr:any;
  constructor(public navCtrl: NavController, 
    public barcodeScanner: BarcodeScanner,
    public quanlyhoso:QuanLyHoSoService,
    public alert: AlertService,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }
  timKiemHoSo(){
    if(this.txtVBPL == '') {
      this.alert.showAlert("error", "Vui lòng nhập đúng định dạng");
      this.show = false;
    } else {
      this.show = true;
    }
    var formtimKiemHoSo = {
      object: this.txtVBPL
    }
    this.quanlyhoso.searchHoSo(formtimKiemHoSo).then(rep => {
      this.chitiethoso = rep;
      this.chitiethoso = JSON.parse(this.chitiethoso.data);
      console.log(this.chitiethoso);
    }, (err) => {
      this.khongtimthayhoso = JSON.parse(err);
      console.log(err);
      this.show = false;
      this.alert.showAlert("error", this.khongtimthayhoso.description);
      
    });
  }
  keyPress(event: any) {
    const pattern = /[a-zA-Z0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  gotoNo() {
    this.navCtrl.push('ThongbaoPage');
  }
  scanQR() {
    this.options = {
     prompt : "Quét mã QR",
    //  currentCamera: 1,
    //  canEnableLight: true,
     // showing: true,
    //  previewing: true
   }
   this.barcodeScanner.scan(this.options).then(barcodeData => {
     console.log('Barcode data', barcodeData);
     this.dulieuqr = barcodeData;
     if (barcodeData.cancelled) {
       return;
     }
     else {
    //  this.formCoSoYTe.PageIndex = 1;
    //  this.formCoSoYTe.timCoSo = this.dulieuqr.text;
     // alert("string +"+JSON.stringify(this.dulieuqr.text));
     // alert("json +"+JSON.parse(this.dulieuqr.text));
    //  if (this.dulieuqr.text.length != 14 ){
      //  this.alert.showAlert("error", "Mã QR không đúng định dạng");
      //  return;
    //  }
     this.txtVBPL = this.dulieuqr.text;
     this.timKiemHoSo();
    //  this.goSpeciallist();
     }
    }).catch(err => {
        console.log('Error', err);
    });

 }
}
