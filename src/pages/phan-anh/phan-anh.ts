import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';
import { isEmpty, isNil } from 'lodash';
import { ChitietPhananhPage } from './chitiet-phananh/chitiet-phananh';
import { ThemPhananhComponent } from '../../components/them-phananh/them-phananh';
import { PhanAnhService } from '../../providers/service/phanAnhService';
import { AlertService } from '../../providers/service/alertService';

@IonicPage()
@Component({
  selector: 'page-phan-anh',
  templateUrl: 'phan-anh.html',
})
export class PhanAnhPage {
  @ViewChild(Navbar) navBar: Navbar;
  showTab = false;
  pageIndex = 1;
  txtSearch = "";
  lstPhanAnh = [];
  noMoreItemsAvailable = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alert: AlertService,
    public phananh: PhanAnhService
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
    this.loadDSPhanAnh();
  }

  ionViewWillLeave() {
    if (this.showTab) {
      let elements = document.querySelectorAll(".tabbar");
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'flex';
      });
    }
  }

  doRefresh(refresher) {
    this.pageIndex = 1;
    this.lstPhanAnh = [];
    this.noMoreItemsAvailable = false;
    this.loadDSPhanAnh();
    if (refresher) {
      refresher.complete();
    }
  }

  loadDSPhanAnh(scroll?: any) {
    if (!this.noMoreItemsAvailable) {
      let param: any;
      if (isEmpty(this.txtSearch) || isNil(this.txtSearch)) {
        param = {
          tuKhoa: "",
          tinhTrang: 1,
          CongKhai: 1,
          pageIndex: this.pageIndex,
          pageSize: 20,
          nam: 0
        }
      } else {
        param = {
          tuKhoa: this.txtSearch,
          tinhTrang: 1,
          CongKhai: 1,
          pageIndex: this.pageIndex,
          pageSize: 1000,
          nam: 0
        }
      }
      this.phananh.getListPhanAnh(param).then(data => {
        let temp = data;
        if (isEmpty(temp) || isNil(temp)) {
          this.alert.showToast("error", "Không có dữ liệu để hiển thị");
          this.noMoreItemsAvailable = true;
        } else {
          if (temp.length < 20 || temp.length <= 0) {
            this.noMoreItemsAvailable = true;
          } else {
            this.pageIndex++;
          }
          for (let i = 0; i < temp.length; i++) {
            let char = (temp[i].HoTenNguoiHoi).split(/[" " ]+/).pop().substring(0, 1);
            if (char == "Ă" || char == "Â") {
              char = "A";
            }
            else if (char == "Đ") {
              char = "D";
            }
            else if (char == "Ê") {
              char = "E";
            }
            else if (char == "Ô" || char == "Ơ") {
              char = "O";
            }
            else if (char == "Ư") {
              char = "U";
            }
            temp[i].NameChar = char.toUpperCase();
            this.lstPhanAnh.push(temp[i]);
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

  seachPhanAnh(txtSearch) {
    this.txtSearch = txtSearch;
    this.lstPhanAnh = [];
    this.noMoreItemsAvailable = false;
    this.pageIndex = 1;
    this.loadDSPhanAnh();
  }


  goPage(hoiDapID) {
    this.navCtrl.push(ChitietPhananhPage, { hoiDapID: hoiDapID})
  }

  addPhanAnh() {
    this.navCtrl.push(ThemPhananhComponent)
  }

}
