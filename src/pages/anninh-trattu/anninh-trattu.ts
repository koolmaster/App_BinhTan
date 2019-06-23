import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Navbar } from 'ionic-angular'
import { isEmpty, isNil } from 'lodash';
import { ChitietAnninhtrattuPage } from './chitiet-anninhtrattu/chitiet-anninhtrattu';
import { AnNinhTratTuService } from '../../providers/service/anNinhTratTuService';
import { AlertService } from '../../providers/service/alertService';
import { CONST } from '../../providers/const/const';

@IonicPage()
@Component({
  selector: 'page-anninh-trattu',
  templateUrl: 'anninh-trattu.html',
})
export class AnninhTrattuPage {
  @ViewChild(Slides) slides: Slides;
  @ViewChild(Navbar) navBar: Navbar;
  tabs = "0";
  firstLoad = true;
  showTab = false;
  style = false;
  txtSearch = '';

  txtSearchTruyNa = "";
  loadMoreTruyNa = false;
  pageIndexTruyNa = 1;
  lstTruyNa = [];

  txtSearchTuyenTruyen = "";
  loadMoreTuyenTruyen = false;
  pageIndexTuyenTruyen = 1;
  lstTuyenTruyen = [];

  txtSearchANGT = "";
  loadMoreANGT = false;
  pageIndexANGT = 1;
  lstATGT = [];

  txtSearchHuongDan = "";
  loadMoreHuongDan = false;
  pageIndexHuongDan = 1;
  lstHuongDan = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alert: AlertService,
    public anninh: AnNinhTratTuService
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
    this.loadDSAnNinh();
  }

  ionViewWillLeave() {
    if (this.showTab) {
      let elements = document.querySelectorAll(".tabbar");
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'flex';
      });
    }
  }

  ngAfterViewInit() {
    this.slides.autoHeight = true;
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
    this.navCtrl.push(ChitietAnninhtrattuPage, { AnNinhTratTuID: id, LoaiAnNinh: type });
  }

  loadDSAnNinh() {
    let param = {
      TuKhoa: "",
      LoaiAnNinh: 1,
      DonViID: 0,
      PageIndex: this.pageIndexTruyNa,
      PageSize: 20
    }
    this.anninh.getDSAnNinhTratTu(param).then(data => {
      let temp = data;
      if (isEmpty(temp) || isNil(temp)) {
        this.alert.showToast("error", "Không có dữ liệu để hiển thị");
        this.loadMoreTruyNa = true;
      } else {
        if (temp.length < 10 || temp.length <= 0) {
          this.loadMoreTruyNa = true;
        } else {
          this.pageIndexTruyNa++;
        }
        for (let i = 0; i < temp.length; i++) {
          this.lstTruyNa.push(temp[i]);
        }
      }
    }, (error) => {
      this.alert.showToast("error", "Lỗi kết nối");
    })
    let param1 = {
      TuKhoa: "",
      LoaiAnNinh: 2,
      DonViID: 0,
      PageIndex: this.pageIndexTuyenTruyen,
      PageSize: 20
    }
    this.anninh.getDSAnNinhTratTuWithout(param1).then(data => {
      let temp = data;
      if (isEmpty(temp) || isNil(temp)) {
        this.alert.showToast("error", "Không có dữ liệu để hiển thị");
        this.loadMoreTuyenTruyen = true;
      } else {
        if (temp.length < 10 || temp.length <= 0) {
          this.loadMoreTuyenTruyen = true;
        } else {
          this.pageIndexTuyenTruyen++;
        }
        for (let i = 0; i < temp.length; i++) {
          this.lstTuyenTruyen.push(temp[i]);
        }
      }
    }, (error) => {
      this.alert.showToast("error", "Lỗi kết nối");
    })
    let param2 = {
      TuKhoa: "",
      LoaiAnNinh: 3,
      DonViID: 0,
      PageIndex: this.pageIndexANGT,
      PageSize: 20
    }
    this.anninh.getDSAnNinhTratTuWithout(param2).then(data => {
      let temp = data;
      if (isEmpty(temp) || isNil(temp)) {
        this.alert.showToast("error", "Không có dữ liệu để hiển thị");
        this.loadMoreANGT = true;
      } else {
        if (temp.length < 10 || temp.length <= 0) {
          this.loadMoreANGT = true;
        } else {
          this.pageIndexANGT++;
        }
        for (let i = 0; i < temp.length; i++) {
          this.lstATGT.push(temp[i]);
        }
      }
    }, (error) => {
      this.alert.showToast("error", "Lỗi kết nối");
    });
    let param3 = {
      TuKhoa: "",
      LoaiAnNinh: 4,
      DonViID: 0,
      PageIndex: this.pageIndexHuongDan,
      PageSize: 20
    }
    this.anninh.getDSAnNinhTratTuWithout(param3).then(data => {
      let temp = data;
      if (isEmpty(temp) || isNil(temp)) {
        this.alert.showToast("error", "Không có dữ liệu để hiển thị");
        this.loadMoreHuongDan = true;
      } else {
        if (temp.length < 10 || temp.length <= 0) {
          this.loadMoreHuongDan = true;
        } else {
          this.pageIndexHuongDan++;
        }
        for (let i = 0; i < temp.length; i++) {
          this.lstHuongDan.push(temp[i]);
        }
      }
    }, (error) => {
      this.alert.showToast("error", "Lỗi kết nối");
    });
  }

  loadSingleTab(scroll?: any) {
    let param
    if (this.tabs == '0') {
      param = {
        TuKhoa: this.txtSearchTruyNa,
        LoaiAnNinh: 1,
        DonViID: 0,
        PageIndex: this.pageIndexTruyNa,
        PageSize: 20
      }
      if (!this.loadMoreTruyNa) {
        this.anninh.getDSAnNinhTratTu(param).then(data => {
          let temp = data;
          if (isEmpty(temp) || isNil(temp)) {
            this.alert.showToast("error", "Không có dữ liệu để hiển thị");
            this.loadMoreTruyNa = true;
          } else {
            if (temp.length < 10 || temp.length <= 0) {
              this.loadMoreTruyNa = true;
            } else {
              this.pageIndexTruyNa++;
            }
            for (let i = 0; i < temp.length; i++) {
              this.lstTruyNa.push(temp[i]);
            }
            this.slides.resize();
            this.slides.update();
            if (scroll) {
              scroll.complete()
            }
          }
        }, (error) => {
          this.alert.showToast("error", "Lỗi kết nối");
        })
      }
    } else if (this.tabs == '1') {
      param = {
        TuKhoa: this.txtSearchTuyenTruyen,
        LoaiAnNinh: 2,
        DonViID: 0,
        PageIndex: this.pageIndexTuyenTruyen,
        PageSize: 20
      }
      if (!this.loadMoreTuyenTruyen) {
        this.anninh.getDSAnNinhTratTu(param).then(data => {
          let temp = data;
          if (isEmpty(temp) || isNil(temp)) {
            this.alert.showToast("error", "Không có dữ liệu để hiển thị");
            this.loadMoreTuyenTruyen = true;
          } else {
            if (temp.length < 10 || temp.length <= 0) {
              this.loadMoreTuyenTruyen = true;
            } else {
              this.pageIndexTuyenTruyen++;
            }
            for (let i = 0; i < temp.length; i++) {
              this.lstTuyenTruyen.push(temp[i]);
            }
            this.slides.resize();
            this.slides.update();
            if (scroll) {
              scroll.complete()
            }
          }
        }, (error) => {
          this.alert.showToast("error", "Lỗi kết nối");
        })
      }
    } else if (this.tabs == '2') {
      param = {
        TuKhoa: this.txtSearchANGT,
        LoaiAnNinh: 3,
        DonViID: 0,
        PageIndex: this.pageIndexANGT,
        PageSize: 20
      }
      if (!this.loadMoreANGT) {
        this.anninh.getDSAnNinhTratTu(param).then(data => {
          let temp = data;
          if (isEmpty(temp) || isNil(temp)) {
            this.alert.showToast("error", "Không có dữ liệu để hiển thị");
            this.loadMoreANGT = true;
          } else {
            if (temp.length < 10 || temp.length <= 0) {
              this.loadMoreANGT = true;
            } else {
              this.pageIndexANGT++;
            }
            for (let i = 0; i < temp.length; i++) {
              this.lstATGT.push(temp[i]);
            }
            this.slides.resize();
            this.slides.update();
            if (scroll) {
              scroll.complete()
            }
          }
        }, (error) => {
          this.alert.showToast("error", "Lỗi kết nối");
        })
      }
    } else  {
      param = {
        TuKhoa: this.txtSearchHuongDan,
        LoaiAnNinh: 4,
        DonViID: 0,
        PageIndex: this.pageIndexHuongDan,
        PageSize: 20
      }
      if (!this.loadMoreHuongDan) {
        this.anninh.getDSAnNinhTratTu(param).then(data => {
          let temp = data;
          if (isEmpty(temp) || isNil(temp)) {
            this.alert.showToast("error", "Không có dữ liệu để hiển thị");
            this.loadMoreHuongDan = true;
          } else {
            if (temp.length < 10 || temp.length <= 0) {
              this.loadMoreHuongDan = true;
            } else {
              this.pageIndexHuongDan++;
            }
            for (let i = 0; i < temp.length; i++) {
              this.lstHuongDan.push(temp[i]);
            }
            this.slides.resize();
            this.slides.update();
            if (scroll) {
              scroll.complete()
            }
          }
        }, (error) => {
          this.alert.showToast("error", "Lỗi kết nối");
        })
      }
    }
  }

  doRefresh(refresher) {
    this.txtSearch = '';
    if (this.tabs == '0') {
      this.pageIndexTruyNa = 1;
      this.txtSearchTruyNa = this.txtSearch;
      this.loadMoreTruyNa = false;
      this.lstTruyNa = [];
    } else if (this.tabs == '1') {
      this.txtSearchTuyenTruyen = this.txtSearch;
      this.loadMoreTuyenTruyen = false;
      this.pageIndexTuyenTruyen = 1;
      this.lstTuyenTruyen = [];
    } else if (this.tabs == '2') {
      this.txtSearchANGT = this.txtSearch;
      this.loadMoreANGT = false;
      this.pageIndexANGT = 1;
      this.lstATGT = [];
    } else {
      this.txtSearchHuongDan = this.txtSearch;
      this.loadMoreHuongDan = false;
      this.pageIndexHuongDan = 1;
      this.lstHuongDan = [];
    }
    this.loadSingleTab();
    if (refresher) {
      refresher.complete();
    }
  }
}
