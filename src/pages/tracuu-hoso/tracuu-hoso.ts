import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-tracuu-hoso',
  templateUrl: 'tracuu-hoso.html',
})
export class TracuuHosoPage {
  show = false;
  txtVBPL = '';
  options :BarcodeScannerOptions;
  public dulieuqr:any;
  constructor(public navCtrl: NavController, 
    public barcodeScanner: BarcodeScanner,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TracuuHosoPage');
  }

  changeText() {
    if(this.txtVBPL == '') {
      this.show = false;
    } else {
      this.show = true;
    }
  }

  gotoNo() {
    this.navCtrl.push('ThongbaoPage');
  }
  scanQR() {
    this.options = {
     prompt : "Quét mã QR",
     // currentCamera: 1,
     // canEnableLight: true,
     // showing: true,
     // previewing: true
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
     if (this.dulieuqr.text.length != 14 ){
      //  this.alert.showAlert("error", "Mã QR không đúng định dạng");
       return;
     }
    //  this.goSpeciallist();
     }
    }).catch(err => {
        console.log('Error', err);
    });

 }
}
