import { TabsPage } from './../tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController,AlertController, NavParams, Platform, Content, App, Tabs, IonicPage } from 'ionic-angular';
import { isEmpty, isNil } from 'lodash';
import { ChitietTintucPage } from './chitiet-tintuc/chitiet-tintuc';
import { AnninhTrattuPage } from '../anninh-trattu/anninh-trattu';
import { ThongbaoPage } from '../thongbao/thongbao';
import { PhanAnhPage } from '../phan-anh/phan-anh';
import { TinTucService } from '../../providers/service/tinTucService';
import { AlertService } from '../../providers/service/alertService';
import { AnNinhTratTuService } from '../../providers/service/anNinhTratTuService';
import { ChitietAnninhtrattuPage } from '../anninh-trattu/chitiet-anninhtrattu/chitiet-anninhtrattu';
import { FCM } from '@ionic-native/fcm';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { ChitietThongbaoPage } from '../thongbao/chitiet-thongbao/chitiet-thongbao';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {
  @ViewChild('pageTop') pageTop: Content;
  @ViewChild('myTabs') myTabs: Tabs;
  show = 0;
  rootPage: any = TabsPage;
  pageIndex = 1;
  txtSearch = "";
  lstTinTuc = [];
  lstANTT = [];
  noMoreItemsAvailable = false;
  constructor(
    public navCtrl: NavController,
    private nav: NavParams,
    private app: App,
    private tintuc: TinTucService,
    public alertCtrl : AlertController,
    private antt: AnNinhTratTuService,
    private alert: AlertService,
    public toastCtrl: ToastController,
    private localNotifications: LocalNotifications,
    private fcm: FCM,
    private platform: Platform,
  ) {
    let elements = document.querySelectorAll(".tabbar");
    Object.keys(elements).map((key) => {
      elements[key].style.display = 'flex';
    });
    let self:any;
    self = this;
    this.platform.ready().then(() => {
      this.fcm.onNotification().subscribe(data => {
        if(data.wasTapped){
          console.log("Received in background");
          if(data.notify_type == 1){
            self.navCtrl.push(ThongbaoPage);
            self.navCtrl.push(ChitietThongbaoPage, { ThongBaoNoiBoID: data.id});
            // this.navCtrl.push(ThongbaoPage,{});
            // this.app.getRootNav().getActiveChildNav().select(2);
            // self.app.getRootNav().push(ChitietThongbaoPage,{params: data.id});
          }
        } else {
          this.localNotifications.schedule({
            title: data.title,
            text: data.body,
            // foreground: true,
            id: data.notify_type
          });
          this.localNotifications.on("click", function(notification){
            if (notification.id == 1){
              self.navCtrl.push(ThongbaoPage);
              self.navCtrl.push(ChitietThongbaoPage, { ThongBaoNoiBoID: data.id});
            }
          });
        };
      });
    });
    platform.registerBackButtonAction(() => {
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();
      if (nav.canGoBack()) {
        nav.pop();
      } else if (activeView.name === "HomePage" || activeView.name === "LoginPage") {
        let alert = this.alertCtrl.create({
          title: 'Thông Báo',
          message: 'Bạn có muốn thoát ứng dụng?',
          buttons: [
            {
              text: 'Thoát',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Đồng ý',
              handler: () => {
                platform.exitApp();
              }
            }
          ]
        });
        alert.present();
      }
    }, 1);
  }

  ionViewDidLoad() {
    this.loadDSTinTuc();
    this.loadDSANTT();
  }

  public pageScroller() {
    this.pageTop.scrollToTop();
  }

  loadDSANTT() {
    let param = {
      TuKhoa: "",
      LoaiAnNinh: 0,
      DonViID: 0,
      PageIndex: 1,
      PageSize: 10
    }
    this.antt.getDSAnNinhTratTuWithout(param).then(data => {
      let temp = data;
      if (isEmpty(temp) || isNil(temp)) {
        this.alert.showToast("error", "Không có dữ liệu để hiển thị");
      } else {
        for (let i = 0; i < temp.length; i++) {
          if (isEmpty(temp[i].AnhDaiDien) || isNil(temp[i].AnhDaiDien)) {
            if (temp[i].LoaiAnNinh == 3) {
              temp[i].AnhDaiDien = 'assets/imgs/antt3.jpg'
            }
            if (temp[i].LoaiAnNinh == 4) {
              temp[i].AnhDaiDien = 'assets/imgs/antt4.png'
            }
          }
          this.lstANTT.push(temp[i]);
        }
        console.log(this.lstANTT);
      }
    }, (error) => {
      this.alert.showToast("error", "Lỗi kết nối");
    })
  }

  loadDSTinTuc(scroll?: any) {
    if (!this.noMoreItemsAvailable) {
      let param = {
        TuKhoa: "",
        LinhVucid: 0,
        DonViID: 0,
        pageIndex: this.pageIndex,
        pageSize: 10
      }
      this.tintuc.postDSTinTuc(param).then(data => {
        let temp = data;
        if (isEmpty(temp) || isNil(temp)) {
          this.alert.showToast("error", "Không có dữ liệu để hiển thị");
          this.noMoreItemsAvailable = true;
        } else {
          if (temp.length < 10 || temp.length <= 0) {
            this.noMoreItemsAvailable = true;
          } else {
            this.pageIndex++;
          }
          for (let i = 0; i < temp.length; i++) {
            this.lstTinTuc.push(temp[i]);
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

  goPage(type, param?) {
    switch (type) {
      case 1:
        let TinTucSuKienID = param;
        this.navCtrl.push(ChitietTintucPage, { TinTucSuKienID: TinTucSuKienID });
        break;
      case 2:
        this.navCtrl.push(AnninhTrattuPage , null, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
        break;
      case 3:
        this.navCtrl.push(ThongbaoPage , null, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
        break;
      case 4:
        this.navCtrl.push(PhanAnhPage , null, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
        break;
      case 5:
        this.app.getRootNav().getActiveChildNav().select(1);
        break;
      default:
        break;
    }
  }

  goPage1(id, type, goTo) {
    this.navCtrl.push(ChitietAnninhtrattuPage, { AnNinhTratTuID: id, LoaiAnNinh: type, goTo: goTo });
  }
}
