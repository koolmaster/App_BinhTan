import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar, Slides, PopoverController } from 'ionic-angular';
import { QuanLyThuTucService } from '../../providers/service/quanLyThuTuc';
import { isEmpty, isNil } from 'lodash'; 
import { AlertService } from '../../providers/service/alertService';
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
  dsLinhVuc = [];
  data_dsthutuc_tatca:any;
  data_dsthutuc_moithaydoi:any;
  noMoreItemsAvailable = false;
  isLoading = false;
  pageIndexTatCa = 1;
  pageIndexThayDoi = 1;
  pageSizeTatCa = 20;
  pageSizeThayDoi = 20;


  //
  lstProcedures = [];
  //
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public alert: AlertService,
    public quanlythutuc: QuanLyThuTucService
  ) {
  }

  ionViewDidLoad() {
    this.loadDanhSachTatCa();
  }
  loadDanhSachTatCa(){
    if (!this.isLoading && !this.noMoreItemsAvailable) {

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

    var formDanhSachThuTuc = {
      PageNum: this.pageIndexTatCa,
      PageSize: this.pageSizeTatCa,
      info: "",
      searchContent: 0
    }
    this.quanlythutuc.postDanhSach(formDanhSachThuTuc).then(rep => {
      debugger;
      if (rep != null ){
      this.data_dsthutuc_tatca = rep;
      this.data_dsthutuc_tatca = JSON.parse(this.data_dsthutuc_tatca);
      this.data_dsthutuc_tatca =  this.data_dsthutuc_tatca.danhSachLinhVucs;
      
      //Lấy lĩnh vực
      debugger;
      var array = this.data_dsthutuc_tatca || [];
        for (var i = 0; i < this.data_dsthutuc_tatca.length; i++) {
          var item = {
            "value": array[i].linhvucDTO.linhvucid,
            "text": array[i].linhvucDTO.tenlinhvuc
          }
          this.dsLinhVuc.push(item);
        }
      }
      // end Lấy lĩnh vực

      // xử lý
      var jsonProcedures = this.data_dsthutuc_tatca;

        (jsonProcedures.length < 20 || jsonProcedures.length <= 0) ? this.noMoreItemsAvailable = true : ++this.pageIndexTatCa;
        for (var i = 0; i < jsonProcedures.length; i++) {
          var danhSachThuTucs = jsonProcedures[i].danhSachThuTucs;
          if (danhSachThuTucs.length > 0) {
            this.lstProcedures.push(jsonProcedures[i]);
          }
        }
      //xử lý
      console.log(rep);
    }, (err) => {
      this.alert.showAlert("error", "Không tìm thấy thủ tục");
    });

  }

  }

  // loadDanhSachMoiThayDoi(){
  //   if (!this.isLoading && !this.noMoreItemsAvailable) {

  //   var formTrinhTrangThuTuc = [{
  //     id: '0',
  //     choose: false,
  //     cls: 'statusVTN',
  //     name: 'Tất cả thủ tục'
  //   }, {
  //     id: '1',
  //     choose: false,
  //     cls: 'statusDXL',
  //     name: 'Mới thay đổi'
  //   }];

  //   var formDanhSachThuTuc = [{
  //     PageNum: this.pageIndexTatCa,
  //     PageSize: this.pageSizeTatCa,
  //     info: "",
  //     searchContent: 0
  //   },
  //   {
  //     PageNum: this.pageIndexThayDoi,
  //     PageSize: this.pageSizeThayDoi,
  //     info: "",
  //     searchContent: 1
  //   }]
  //   this.quanlythutuc.postDanhSach(formDanhSachThuTuc).then(rep => {
  //     debugger;
  //     if (rep != null ){
  //     this.data_dsthutuc = rep;
  //     this.data_dsthutuc = JSON.parse(this.data_dsthutuc);
  //     this.data_dsthutuc =  this.data_dsthutuc.danhSachLinhVucs;
      
  //     //Lấy lĩnh vực
  //     debugger;
  //     var array = this.data_dsthutuc || [];
  //       for (var i = 0; i < this.data_dsthutuc.length; i++) {
  //         var item = {
  //           "value": array[i].linhvucDTO.linhvucid,
  //           "text": array[i].linhvucDTO.tenlinhvuc
  //         }
  //         this.dsLinhVuc.push(item);
  //       }
  //     }
  //     // end Lấy lĩnh vực

  //     // xử lý
  //     var jsonProcedures = this.data_dsthutuc;

  //       (jsonProcedures.length < 20 || jsonProcedures.length <= 0) ? this.noMoreItemsAvailable = true : ++$scope.pageNo;
  //       for (var i = 0; i < jsonProcedures.length; i++) {
  //         var danhSachThuTucs = jsonProcedures[i].danhSachThuTucs;
  //         if (danhSachThuTucs.length > 0) {
  //           isData = true;
  //           $scope.lstProcedures.push(jsonProcedures[i]);
  //         }
  //       }
  //     //xử lý
  //     console.log(rep);
  //   }, (err) => {
  //     this.alert.showAlert("error", "Không tìm thấy thủ tục");
  //   });

  // }

  // }

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
