import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Navbar, Content } from 'ionic-angular';
import { isEmpty, isNil } from 'lodash';
import { TrungCauService } from '../../providers/service/trungCauService';
import { AlertService } from '../../providers/service/alertService';
@IonicPage()
@Component({
  selector: 'page-trung-cau',
  templateUrl: 'trung-cau.html',
})
export class TrungCauPage {
  @ViewChild(Slides) slides: Slides;
  @ViewChild(Navbar) navBar: Navbar;
  @ViewChild('pageTop') pageTop: Content;
  elements = document.querySelectorAll(".tabbar");
  view: any;
  tabs = "0";
  flag = 0;
  showTab = false;
  isLoadMore = false;
  pageIndex = 1;
  lstTrungCau = [];
  lstChart = [];
  colorScheme = {
    domain: ['#14cbfa', '#62e6ca']
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public trungcauservice: TrungCauService,
    public alert: AlertService
  ) {
    this.view = [innerWidth / 1.1, 300];
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


  onResize(event) {
    this.view = [event.target.innerWidth / 1.1, 300];
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = (ev: UIEvent) => {
      this.showTab = true;
      this.navCtrl.pop();
    };
    this.loadDS();
  }

  ngAfterViewInit() {
    this.slides.autoHeight = true;
  }

  loadDS(scroll?: any) {
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
    let temp = document.querySelector('.tab-trungcau');
    temp.setAttribute('style', '--i:' + val);
  }

  moveTab($event) {
    this.tabs = $event._snapIndex.toString();
    let temp = document.querySelector('.tab-trungcau');
    temp.setAttribute('style', '--i:' + $event._snapIndex);
  }

  goDetail(id) {
    this.navCtrl.push('ChitietTrungcauPage', {TrungCauYKienID:id})
  }
}
