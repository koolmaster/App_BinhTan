import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThongBaoService } from '../../../providers/service/thongBaoService';
import { AlertService } from '../../../providers/service/alertService';

@IonicPage()
@Component({
  selector: 'page-chitiet-thongbao',
  templateUrl: 'chitiet-thongbao.html',
})
export class ChitietThongbaoPage {
  thongbaoID = this.navParams.get('ThongBaoNoiBoID');
  chitietTB: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public chitietthongbao: ThongBaoService,
    public alert: AlertService
  ) {
    
  }

  ionViewDidLoad() {
    this.loadChiTiet();
  }

  loadChiTiet() {
    let param = {
      thongBaoNoiBoID: this.thongbaoID
    }
    this.chitietthongbao.getDetailsThongBao(param).then(data => {
      this.chitietTB = data;
      console.log(this.chitietTB);
    }, (error) => {
      this.alert.showToast("error", "Lỗi kết nối");
    })
  }

}
