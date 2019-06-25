import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar, Slides } from 'ionic-angular';

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
  @ViewChild(Navbar) navBar: Navbar;
  @ViewChild(Slides) slides: Slides;
  elements = document.querySelectorAll(".tabbar");
  tabs = "0";
  firstLoad = true;
  showTab = false;
  style = false;
  txtSearch = '';
  show = false;


  section: sectionInterface[] = [
    { title: 'Hành chính', type: 0 },
    { title: 'Điện thoại', type: 1 },
    { title: 'Tiêu dùng', type: 2 } 
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (this.elements != null) {
      Object.keys(this.elements).map((key) => {
        this.elements[key].style.display = 'none';
      });
    }
  }

  ionViewWillLeave() {
    if (this.showTab) {
      Object.keys(this.elements).map((key) => {
        this.elements[key].style.display = 'flex';
      });
    }
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = (ev: UIEvent) => {
      this.showTab = true;
      this.navCtrl.pop();
    };

    setTimeout(() => {
      this.show = true;
    }, 2000);
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
    this.navCtrl.push('', { AnNinhTratTuID: id, LoaiAnNinh: type });
  }

  doRefresh(refresher) {
    this.txtSearch = '';
    if (refresher) {
      refresher.complete();
    }
  }

}
