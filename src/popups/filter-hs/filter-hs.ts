import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-filter-hs',
  templateUrl: 'filter-hs.html',
})
export class FilterHsPage {
  tinhtrang = 0;
  txtHoSo = '';
  placeholder = 'Tên';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterHsPage');
  }

  changeValue(value) {
    switch (value) {
      case 1:
        this.placeholder = 'hồ sơ chưa nộp';
        break;

      case 2:
        this.placeholder = 'hồ sơ từ chối giải quyết';
        break;
      
      case 3:
        this.placeholder = 'hồ sơ chờ giải quyết';
        break;
      
      case 4:
        this.placeholder = 'hồ sơ đã có kết quả';
        break;

      default:
        this.placeholder = 'Tên';
        break;
    }
  }

}
