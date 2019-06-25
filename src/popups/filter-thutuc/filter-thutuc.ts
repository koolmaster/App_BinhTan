import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-filter-thutuc',
  templateUrl: 'filter-thutuc.html',
})
export class FilterThutucPage {
  tinhtrang = 0;
  txtHoSo = '';
  placeholder = 'Tên thủ tục';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterThutucPage');
  }

  changeValue(value) {
    switch (value) {
      case 1:
        this.placeholder = 'Mới thay đổi';
        break;

      default:
        this.placeholder = 'Tên thủ tục';
        break;
    }
  }

}
