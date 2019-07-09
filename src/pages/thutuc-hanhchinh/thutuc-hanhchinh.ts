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
  loadDanhSach(){
    var formTrinhTrangThuTuc = [{
      id: '0',
      choose: false,
      cls: 'statusVTN',
      name: 'Tất cả thủ tục'
    }, {
      id: '1',
      choose: false,
      cls: 'statusDXL',
      name: 'Mới thay đổi'
    }];


    
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
    this.doRefresh();
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

  doRefresh(refresher?) {
    this.txtSearch = '';
    // this.isLoadMore = false;
    // this.pageIndex = 1;
    // this.lstThongBao = [];
    // this.loadDS();
    if (refresher) {
      refresher.complete();
    }
  }


}
