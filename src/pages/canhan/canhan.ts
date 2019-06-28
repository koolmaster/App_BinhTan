import { TrattudothiPage } from './../trattudothi/trattudothi';
import { QuyhoachPage } from './../quyhoach/quyhoach';
import { PhanAnhPage } from './../phan-anh/phan-anh';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar, Slides } from 'ionic-angular';
import { HuongdansudungPage } from '../huongdansudung/huongdansudung';

/**
 * Generated class for the CanhanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface sectionInterface {
  title: string;
  type: any;
}
@IonicPage()
@Component({
  selector: 'page-canhan',
  templateUrl: 'canhan.html',
})
export class CanhanPage {
  @ViewChild(Slides) slides: Slides;
  elements = document.querySelectorAll(".tabbar");
  tabs = "0";
  firstLoad = true;
  showTab = false;
  style = false;
  txtSearch = '';
  show = false;


  section: sectionInterface[] = [
    { title: 'Chức năng', type: 0 },
    { title: 'Thông tin', type: 1 },
    { title: 'Cài đặt', type: 2 } 
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLeave() {
  }

  ionViewDidLoad() {
  }

  onTabChange(val) {
    this.slides.slideTo(val, 300);
    let temp = document.querySelector('.row2-2');
    temp.setAttribute('style', '--i:' + val);
  }

  moveTab($event) {
    this.tabs = $event._snapIndex.toString();
    let temp = document.querySelector('.row2-2');
    this.firstLoad = false;
    temp.setAttribute('style', '--i:' + $event._snapIndex);
  }

  goPage(id, type) {
    if(id == 0){
    this.navCtrl.push('PhanAnhPage');
    }
    else if (id ==1){
      this.navCtrl.push('QuyhoachPage');
    }
    else if (id ==2){
      this.navCtrl.push('TrattudothiPage');
    }
    else if (id ==3){
      this.navCtrl.push('HuongdansudungPage');
    }
  }

  doRefresh(refresher) {
    this.txtSearch = '';
    if (refresher) {
      refresher.complete();
    }
  }

}
