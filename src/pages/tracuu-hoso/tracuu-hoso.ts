import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tracuu-hoso',
  templateUrl: 'tracuu-hoso.html',
})
export class TracuuHosoPage {
  show = false;
  txtVBPL = ''
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
}
