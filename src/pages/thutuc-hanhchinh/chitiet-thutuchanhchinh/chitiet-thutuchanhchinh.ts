import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar, ModalController } from 'ionic-angular';
import { QuanLyThuTucService } from '../../../providers/service/quanLyThuTuc';
import { AlertService } from '../../../providers/service/alertService';

@IonicPage()
@Component({
  selector: 'page-chitiet-thutuchanhchinh',
  templateUrl: 'chitiet-thutuchanhchinh.html',
})
export class ChitietThutuchanhchinhPage {
  @ViewChild(Navbar) navBar: Navbar;
  dulieuChitiet:any = [];
  cancuphaply:any = [];
  elements = document.querySelectorAll(".tabbar");

  showTab = false;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public quanlythutuc : QuanLyThuTucService,
    public alert: AlertService,
    public modalCtrl: ModalController) {
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
    
    this.getChiTiet();
  }
  getChiTiet(){
    
    var formChitiet = {
      object: this.navParams.data.item.danhSachThuTucs[this.navParams.data.id].thutucDTO.thutucid,
    }
    this.quanlythutuc.getChiTiet(formChitiet).then(rep => {
      
      let dataChiTiet:any = rep;
      dataChiTiet = JSON.parse(dataChiTiet);
      //
      this.cancuphaply = JSON.parse(dataChiTiet.thutucDTO.cancuphaply);
      this.dulieuChitiet = dataChiTiet;
      if (rep != null ){
      }
    }, (err) => {
      this.alert.showAlert("error", "Không tìm thấy thủ tục");
    });
  }

  presentFilterModal() {
    let profileModal = this.modalCtrl.create('PopupGopyPage');
    profileModal.present();
  }

}
