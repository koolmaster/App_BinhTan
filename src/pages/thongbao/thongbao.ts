import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';
import { isEmpty, isNil } from 'lodash';
import { ChitietThongbaoPage } from './chitiet-thongbao/chitiet-thongbao';
import { ThongBaoService } from '../../providers/service/thongBaoService';
import { AlertService } from '../../providers/service/alertService';

@IonicPage()
@Component({
  selector: 'page-thongbao',
  templateUrl: 'thongbao.html',
})
export class ThongbaoPage {
  @ViewChild(Navbar) navBar: Navbar;
  showTab = false;
  isLoadMore = false;
  pageIndex = 1;
  lstThongBao = [];
  txtSearch = "";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alert: AlertService,
    public thongbaoservice: ThongBaoService
  ) {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'none';
      });
    }
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = (ev: UIEvent) => {
      this.showTab = true;
      this.navCtrl.pop();
    };
    this.loadDS();
  }

  ionViewWillLeave() {
    if (this.showTab) {
      let elements = document.querySelectorAll(".tabbar");
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'flex';
      });
    }
  }

  loadDS(scroll?: any) {
    if (!this.isLoadMore) {
      let param: any;
      if (isEmpty(this.txtSearch) || isNil(this.txtSearch)) {
        param = {
          tieuDe: "",
          pageIndex: this.pageIndex,
          pageSize: 10
        }
      } else {
        param = {
          tieuDe: this.txtSearch,
          pageIndex: this.pageIndex,
          pageSize: 1000
        }
      }
      this.thongbaoservice.getListThongBao(param).then(data => {
        let temp = data;
        if (isEmpty(temp) || isNil(temp)) {
          this.alert.showToast("error", "Không có dữ liệu để hiển thị");
          this.isLoadMore = true;
        } else {
          if (temp.length < 10 || temp.length <= 0) {
            this.isLoadMore = true;
          } else {
            this.pageIndex++;
          }
          for (let i = 0; i < temp.length; i++) {
            this.lstThongBao.push(temp[i]);
          }
          if (scroll) {
            scroll.complete()
          }
        }
      }, (error) => {
        this.alert.showToast("error", "Lỗi kết nối");
      })
    }
  }

  goPage(ThongBaoNoiBoID) {
    this.navCtrl.push('ChitietThongbaoPage', { ThongBaoNoiBoID: ThongBaoNoiBoID});
  }

  seachThongBao(txtSearch) {
    this.txtSearch = txtSearch;
    this.lstThongBao = [];
    this.isLoadMore = false;
    this.loadDS();
  }

  doRefresh(refresher) {
    this.txtSearch = '';
    this.isLoadMore = false;
    this.pageIndex = 1;
    this.lstThongBao = [];
    this.loadDS();
    if (refresher) {
      refresher.complete();
    }
  }

}
