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
  data_dsthutuc_tatca:any =[];
  data_dsthutuc_moithaydoi:any = [];
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

    var formDanhSachThuTuc = {
      PageNum: this.pageIndexTatCa,
      PageSize: this.pageSizeTatCa,
      info: this.txtSearch,
      searchContent: 0
    }
    this.quanlythutuc.postDanhSach(formDanhSachThuTuc).then(rep => {
      if (rep != null ){
      let dataThuTuc:any = rep;
      dataThuTuc = JSON.parse(dataThuTuc);
      dataThuTuc = dataThuTuc.danhSachLinhVucs;
      let k = 0;
      for(var j = 0; j < dataThuTuc.length; j++ ){
        if (dataThuTuc[j].danhSachThuTucs.length == 0){
          k++;
          dataThuTuc[j].linhvucDTO.tenlinhvuc == null;
        }
        else {
        dataThuTuc[j].linhvucDTO.tenlinhvuc = dataThuTuc[j].linhvucDTO.tenlinhvuc.replace("Lĩnh vực ","");
        }
      }
      if (k == dataThuTuc.length){
        this.alert.showAlert("error", "Không tìm thấy thủ tục");
        return
      }
      // xử lý
      var jsonProcedures = dataThuTuc;
        (jsonProcedures.length < 20 || jsonProcedures.length <= 0) ? this.noMoreItemsAvailable = true : ++this.pageIndexTatCa;
        for (var i = 0; i < jsonProcedures.length; i++) {
            this.data_dsthutuc_tatca.push(jsonProcedures[i]);
        }
      //xử lý
      console.log(rep);
      }
    }, (err) => {
      this.alert.showAlert("error", "Không tìm thấy thủ tục");
    });

  }

  }

  loadDanhSachThayDoi(){
    if (!this.isLoading && !this.noMoreItemsAvailable) {

    var formDanhSachThuTuc = {
      PageNum: this.pageIndexThayDoi,
      PageSize: this.pageSizeThayDoi,
      info: this.txtSearch,
      searchContent: 1
    }
    this.quanlythutuc.postDanhSach(formDanhSachThuTuc).then(rep => {
      if (rep != null ){
      let dataThuTuc:any = rep;
      dataThuTuc = JSON.parse(dataThuTuc);
      dataThuTuc = dataThuTuc.danhSachLinhVucs;
      let k = 0;
      for(var j = 0; j < dataThuTuc.length; j++ ){
        if (dataThuTuc[j].danhSachThuTucs.length == 0){
          k++;
          dataThuTuc[j].linhvucDTO.tenlinhvuc == null;
        }
        else{
        dataThuTuc[j].linhvucDTO.tenlinhvuc = dataThuTuc[j].linhvucDTO.tenlinhvuc.replace("Lĩnh vực ","");
        }
      }
      if (k == dataThuTuc.length){
        this.alert.showAlert("error", "Không tìm thấy thủ tục");
        return
      }
      // xử lý
      var jsonProcedures = dataThuTuc;
        (jsonProcedures.length < 20 || jsonProcedures.length <= 0) ? this.noMoreItemsAvailable = true : ++this.pageIndexThayDoi;
        for (var i = 0; i < jsonProcedures.length; i++) {
            this.data_dsthutuc_moithaydoi.push(jsonProcedures[i]);
        }
      //xử lý
      console.log(rep);
      }
    }, (err) => {
      this.alert.showAlert("error", "Không tìm thấy thủ tục");
    });

  }

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
        this.placeholder = "Tìm kiếm tất cả thủ tục";
        break;
    }
    this.doRefresh();
  }
  timkiemThuTuc(){
    this.noMoreItemsAvailable = false;
    if ( this.tabhanhchinh == "1"){
    this.pageIndexThayDoi = 1;
    this.pageSizeThayDoi = 20;
    this.data_dsthutuc_moithaydoi = [];
    this.loadDanhSachThayDoi();
    }
    else {
    this.pageIndexTatCa = 1;
    this.pageSizeTatCa = 20;
    this.data_dsthutuc_tatca = [];
    this.loadDanhSachTatCa();
    }
  }

  presentPopover(myEvent, txtSearch) {
    let popover = this.popoverCtrl.create('FilterThutucPage', { search: txtSearch });
    popover.present({
      ev: myEvent
    });
  }

  goPage(index, item) {
    
    this.navCtrl.push('ChitietThutuchanhchinhPage', {
      id: index,
      item: item
    });
  }
  loadDS(event?){
    if ( this.tabhanhchinh == "1"){
      this.loadDanhSachThayDoi();
      }
      else {
      this.loadDanhSachTatCa();
      }
  }
  doRefresh(refresher?){
    this.noMoreItemsAvailable = false;
    if ( this.tabhanhchinh == "1"){
    this.pageIndexThayDoi = 1;
    this.pageSizeThayDoi = 20;
    this.data_dsthutuc_moithaydoi = [];
    this.loadDanhSachThayDoi();
    }
    else {
    this.pageIndexTatCa = 1;
    this.pageSizeTatCa = 20;
    this.data_dsthutuc_tatca = [];
    this.loadDanhSachTatCa();
    }
    if (refresher) {
      refresher.complete();
    }
  }


}
