import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Navbar, Content } from 'ionic-angular';
import { isEmpty, isNil } from 'lodash';
import { TrungCauService } from '../../providers/service/trungCauService';
import { AlertService } from '../../providers/service/alertService';
import { ChitietTrungcauPage } from './chitiet-trungcau/chitiet-trungcau';
@IonicPage()
@Component({
  selector: 'page-trung-cau',
  templateUrl: 'trung-cau.html',
})
export class TrungCauPage {
  @ViewChild(Slides) slides: Slides;
  @ViewChild(Navbar) navBar: Navbar;
  @ViewChild('pageTop') pageTop: Content;
  view: any;
  tabs = "0";
  flag = 0;
  showTab = false;
  isLoadMore = false;
  pageIndex = 1;
  lstTrungCau = [];
  lstChart = [];
  colorScheme = {
    domain: ['#0099FF', '#00CC66']
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public trungcauservice: TrungCauService,
    public alert: AlertService
  ) {
    this.view = [innerWidth / 1.1, 300];
  }

  onResize(event) {
    this.view = [event.target.innerWidth / 1.1, 300];
  }

  ionViewDidLoad() {
    this.loadDS();
  }

  ngAfterViewInit() {
    this.slides.autoHeight = true;
  }

  loadDS(scroll?: any) {
    // debugger;
    if (!this.isLoadMore) {
      let param = {
        nam: 0,
        pageIndex: this.pageIndex,
        pageSize: 10
      }
      this.trungcauservice.getDanhSach(param).then(data => {
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
            this.lstTrungCau.push(temp[i]);
            let itemChart = {
              NgayKetThuc: temp[i].NgayKetThuc,
              TieuDe: temp[i].TieuDe,
              TrungCauYKienID: temp[i].TrungCauYKienID,
              dataChart:[
                {
                  "name": "Đồng ý",
                  "value": temp[i].DongY
                },
                {
                  "name": "Không đồng ý",
                  "value": temp[i].KhongDongY
                }
              ]
            }
            this.lstChart.push(itemChart);
            console.log(this.lstChart);
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

  bieuQuyet(item) {
    debugger;
    let ele = {
      trungcauykienid: item.TrungCauYKienID,
      type: item.type
    }
    if (!isEmpty(ele.type) || !isNil(ele.type)) {
      this.trungcauservice.postBieuQuyet(ele).then(data => {
        console.log(data);
        this.lstTrungCau = [];
        this.lstChart = [];
        this.pageIndex = 1;
        this.isLoadMore = false;
        this.loadDS();
      }, (error) => {
        this.alert.showToast("error", "Lỗi kết nối");
      })
    } else {
      this.alert.showAlert('error', 'Chưa chọn biểu quyết')
    }

  }

  onTabChange(val) {
    this.slides.slideTo(val, 300);
    let temp = document.querySelector('.row2-2');
    temp.setAttribute('style', '--i:' + val);
  }

  moveTab($event) {
    this.tabs = $event._snapIndex.toString();
    let temp = document.querySelector('.row2-2');
    temp.setAttribute('style', '--i:' + $event._snapIndex);
  }

  goDetail(id) {
    this.navCtrl.push(ChitietTrungcauPage, {TrungCauYKienID:id})
  }
}
