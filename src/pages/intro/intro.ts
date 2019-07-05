import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { trigger, style, animate, transition } from '@angular/animations';
import introJs from 'intro.js/intro.js';
export interface HomeInterface {
  title: string;
  component: any;
  icon: string;
  classname: string;
}
@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
  animations: [
    trigger(
      'fadeInOut', [
        transition(':enter', [
          style({ transform: 'translate3d(0, 100%, 0)', opacity: 0 }),
          animate('1000ms', style({ transform: 'translate3d(0, 0, 0)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ opacity: 1 }),
          animate('500ms', style({ transform: 'translate3d(0, 100%, 0)', opacity: 0 }))
        ])
      ]
    ),
    trigger(
      'fadeRightLeft', [
        transition(':enter', [
          style({ transform: 'translate3d(100%, 0, 0)', opacity: 0 }),
          animate('1000ms', style({ transform: 'translate3d(0, 0, 0)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ opacity: 1 }),
          animate('500ms', style({ transform: 'translate3d(100%, 0, 0)', opacity: 0 }))
        ])
      ]
    )
  ],
})
export class IntroPage {
  pages: HomeInterface[] = [
    { title: 'Tra cứu thủ tục', component: "", icon: 'icon2-1 icon2-email', classname: "step10" },
    { title: 'Tra cứu hồ sơ', component: "", icon: 'icon2-1 icon2-tchs', classname: "step11" },
    { title: 'Nộp hồ sơ trực tuyến', component: "", icon: 'icon2-1 icon2-nhstt', classname: "step12" },
    { title: 'Hướng dẫn sử dụng', component: "", icon: 'icon2-1 icon2-hdsd', classname: "step13" },
  ]
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController
  ) {

  }

  ionViewDidLoad() {
    const confirm = this.alertCtrl.create({
      title: 'Thông báo !!!',
      message: 'Hướng dẫn sử dụng',
      buttons: [
        {
          text: 'Quay lại',
          handler: () => {
            this.navCtrl.setRoot('TabsPage');
          }
        },
        {
          text: 'Bắt đầu',
          handler: () => {
            this.start();
          }
        }
      ]
    });
    confirm.present();
  }

  start() {
    let self = this;
    introJs.introJs().setOptions({
      "nextLabel": "Kế tiếp",
      "prevLabel": "Trước đó",
      skipLabel: "Bỏ qua",
      doneLabel: "Hoàn thành",
      showProgress: true,
      showBullets: false,
      exitOnOverlayClick: false,
      scrollPadding: 130,
      steps: [{
        element: '#step1',
        intro: 'Nút menu',
        position: 'bottom'
      },
      {
        element: '#step2',
        intro: 'Nút đăng nhập',
        position: 'bottom'
      },
      {
        element: '#step3',
        intro: 'Khung đăng nhập',
        position: 'bottom'
      },
      {
        element: '#step4',
        intro: 'Vị trí nhập tên đăng nhập',
        position: 'bottom'
      },
      {
        element: '#step5',
        intro: 'Vị trí nhập mật khẩu',
        position: 'bottom'
      },
      {
        element: '#step6',
        intro: 'Nút <span style="color: blue">Đăng nhập</span> để hoàn thành quá trình đăng nhập',
        position: 'bottom'
      },
      {
        element: '#step7',
        intro: 'Giao diện chính của App , hiển thị các chứ năng chính',
        position: 'bottom'
      },
      {
        element: '#step8',
        intro: 'Tìm kiếm nhập biên nhận , mã tra cứu',
        position: 'bottom'
      },
      {
        element: '#step9',
        intro: 'Danh sách chức năng chức chính',
        position: 'bottom'
      },
      {
        element: '#step10',
        intro: 'Chức năng <span style="color: blue">TRA CỨU THỦ TỤC</span> hiển thị danh sách thủ tục',
        position: 'bottom'
      },
      {
        element: '#step11',
        intro: 'Chức năng <span style="color: blue">TRA CỨU HỒ SƠ</span> tìm kiếm hồ sơ thông qua mã tra cứu hoặc số biên nhận',
        position: 'bottom'
      },
      {
        element: '#step12',
        intro: 'Chức năng <span style="color: blue">NỘP HỒ SƠ TRỰC TUYẾN</span> hiện thị danh sách hồ sơ và đăng ký nộp hồ sơ cá nhân',
        position: 'bottom'
      },
      {
        element: '#step13',
        intro: 'Chức năng <span style="color: blue">HƯỚNG DẪN SỬ DỤNG</span> hướng dẫn sử dụng ứng dụng',
        position: 'bottom'
      }]
    }).start().onbeforechange(function (targetElement) {
      console.log(targetElement.id);
      switch (targetElement.id) {
        case "step2":
          document.getElementById('step9').classList.add('hidden');
          document.getElementById('step8').classList.add('hidden');
          document.getElementById('step3').classList.add('show');
          break;
        case "step7":
          document.getElementById('step9').classList.remove('hidden');
          document.getElementById('step8').classList.remove('hidden');
          document.getElementById('step3').classList.remove('show');
          break;
      }
    }).onexit(function () {
      self.navCtrl.setRoot('TabsPage');
    });
  }

}
