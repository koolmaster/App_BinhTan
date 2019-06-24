import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Navbar, PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-hoso-cuatoi',
  templateUrl: 'hoso-cuatoi.html',
})
export class HosoCuatoiPage {
  @ViewChild(Slides) slides: Slides;
  @ViewChild(Navbar) navBar: Navbar;
  tabs = "0";
  txtSearch = '';
  placeholder = "Tìm kiếm hồ sơ chưa nộp";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController
  ) {
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
    temp.setAttribute('style', '--i:' + $event._snapIndex);
    switch (this.tabs) {
      case '1':
        this.placeholder = "Tìm kiếm hồ sơ chờ giải quyết";
        break;

      case '2':
        this.placeholder = "Tìm kiếm hồ sơ đã có kết quả";
        break;

      case '3':
        this.placeholder = "Tìm kiếm hồ sơ bị từ chối";
        break;

      default:
        this.placeholder = "Tìm kiếm hồ sơ chưa nộp";
        break;
    }
  }

  presentPopover(myEvent, txtSearch) {
    let popover = this.popoverCtrl.create('FilterHsPage', { search: txtSearch });
    popover.present({
      ev: myEvent
    });
  }

  goPage() {
    if (this.tabs == '0') {
      this.navCtrl.push('CapgiayChungnhanPage');
    } else {
      this.navCtrl.push('ChitietHosocuatoiPage');
    }
  }

}
