import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar, Slides, PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-thutuc-hanhchinh',
  templateUrl: 'thutuc-hanhchinh.html',
})
export class ThutucHanhchinhPage {
  @ViewChild(Slides) slides: Slides;
  @ViewChild(Navbar) navBar: Navbar;
  tabhanhchinh = "0";
  txtSearch = '';
  placeholder = "Tìm kiếm thủ tục";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
  ) {
  }

  ionViewDidLoad() {
  }

  onTabChange(val) {
    this.slides.slideTo(val, 300);
    let temp = document.querySelector('.tab-thutuc');
    temp.setAttribute('style', '--i:' + val);
  }

  moveTab($event) {
    this.tabhanhchinh = $event._snapIndex.toString();
    let temp = document.querySelector('.tab-thutuc');
    temp.setAttribute('style', '--i:' + $event._snapIndex);
    switch (this.tabhanhchinh) {
      case '1':
        this.placeholder = "Tìm kiếm thủ tục mới thay đổi";
        break;

      default:
        this.placeholder = "Tìm kiếm thủ tục";
        break;
    }
  }

  presentPopover(myEvent, txtSearch) {
    let popover = this.popoverCtrl.create('FilterThutucPage', { search: txtSearch });
    popover.present({
      ev: myEvent
    });
  }

  goPage() {
    this.navCtrl.push('ChitietThutuchanhchinhPage');
  }


}
