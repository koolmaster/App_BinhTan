import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TinTucService } from '../../../providers/service/tinTucService';
import { AlertService } from '../../../providers/service/alertService';
import { CONST } from '../../../providers/const/const';

@IonicPage()
@Component({
  selector: 'page-chitiet-tintuc',
  templateUrl: 'chitiet-tintuc.html',
})
export class ChitietTintucPage {
  param = this.navParams.get('TinTucSuKienID');
  chitietTT: any;
  lstTinTuc = [];
  count = 1;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alert: AlertService,
    private chitiettintuc: TinTucService
  ) {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'none';
      });
    }
  }

  ionViewDidLoad() {
    this.loadDetailTinTuc();
  }

  ionViewWillLeave() {
    let elements = document.querySelectorAll(".tabbar");
    Object.keys(elements).map((key) => {
      elements[key].style.display = 'flex';
    });
  }
  goPage(TinTucSuKienID) {
    this.navCtrl.push(ChitietTintucPage, { TinTucSuKienID: TinTucSuKienID });
  }
  loadDetailTinTuc() {
    let param = {
      TinTucSuKienID: this.param
    }
    this.chitiettintuc.getChitiet(param).then(data => {
      this.chitietTT = data;
      let paramds = {
        TuKhoa: "",
        LinhVucid: 0,
        DonViID: 0,
        pageIndex: 1,
        pageSize: 1000
      }
      let id = this.chitietTT.LinhVucId
      this.chitiettintuc.postDSTinTucWithout(paramds).then(datas => {
        let temp = datas;
        for (let i = 0; i < temp.length; i++) {
          if (this.chitietTT.TinTucSuKienID != temp[i].TinTucSuKienID) {
            if (this.count < 6) {
              if (id == temp[i].LinhVucId) {
                this.lstTinTuc.push(temp[i]);
                this.count++;
              }
            } else {
              break;
            }
          }
        }
      }, (error) => {
        this.alert.showToast("error", "Lỗi kết nối");
      })
    }, (error) => {
      this.alert.showToast("error", "Lỗi kết nối");
    })
  }

}
