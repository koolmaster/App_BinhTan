import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrungCauService } from '../../../providers/service/trungCauService';
import { DanhSachModel } from '../../../providers/models/TrungCau.model';
import { AlertService } from '../../../providers/service/alertService';

@IonicPage()
@Component({
  selector: 'page-chitiet-trungcau',
  templateUrl: 'chitiet-trungcau.html',
})
export class ChitietTrungcauPage {
  trungCauID = this.navParams.get('TrungCauYKienID');
  chitietTC: DanhSachModel;
  colorScheme = {
    domain: ['#f00', '#0099FF']
  };
  dataChart: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public chitiet: TrungCauService,
    public alert: AlertService
  ) {
  }

  ionViewDidLoad() {
    this.loadChiTiet();
  }

  loadChiTiet() {
    let param = {
      trungCauYKienID: this.trungCauID
    }
    this.chitiet.getChitiet(param).then(data => {
      this.chitietTC = data;
      console.log(this.chitietTC);
      this.dataChart = [
        {
          "name": "Không đồng ý",
          "value": this.chitietTC.KhongDongY
        },
        {
          "name": "Đồng ý",
          "value": this.chitietTC.DongY
        }
      ]
    }, (error) => {
      this.alert.showToast("error", "Lỗi kết nối");
    })
  }

}
