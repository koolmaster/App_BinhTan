import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, Slides } from 'ionic-angular';
import { trigger, style, animate, transition } from '@angular/animations';
import introJs from 'intro.js/intro.js';
import Typewriter from 'typewriter-effect/dist/core';
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
  @ViewChild(Slides) slides: Slides;
  showA = true;
  tabs = "0";
  tabhanhchinh = "0";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController
  ) {

  }
  ionViewDidLoad() {
  }
  submit(index) {
    if (index == 0) {
      this.navCtrl.setRoot('TabsPage', {}, { animate: true, direction: 'forward' });
    } else {
      this.start();
      this.showA = false;
    }
  }

  start() {
    let self = this;
    introJs.introJs().setOptions({
      "nextLabel": "Tiếp theo",
      "prevLabel": "Quay lại",
      skipLabel: "Đã hiểu",
      doneLabel: "Hoàn thành",
      showProgress: true,
      showBullets: false,
      exitOnOverlayClick: false,
      scrollPadding: 130,
      steps: [{
        element: '#step1',
        intro: 'Chức năng tra cứu hồ sơ với 3 cách sử dụng',
        position: 'bottom'
      },
      {
        element: '#step2',
        intro: 'Cách 1: Nhập số biên nhận, mã tra cứu mà bạn nhận được từ hệ thống hoặc cơ quan chức năng sau khi đăng ký hồ sơ thành công',
        position: 'bottom'
      },
      {
        element: '#step3',
        intro: 'Cách 2: Nhấn vào để quét mã QR',
        position: 'bottom'
      },
      {
        element: '#step4',
        intro: 'Cách 3: Soạn tin nhắn với cú pháp: <b>TC 00.54.H29</b> gửi đến <b>1022</b>',
        position: 'bottom'
      },
      {
        element: '#step5',
        intro: 'Ví dụ số biên nhận của bạn là <b>777022015CPLD00132</b> hoặc mã tra cứu là <b>1541511924666</b>',
        position: 'bottom'
      },
      {
        element: '#step6',
        intro: 'Thông tin về hồ sơ',
        position: 'bottom'
      },
      {
        element: '#step7',
        intro: 'Chức năng hồ sơ của tôi',
        position: 'bottom'
      },
      {
        element: '#step8',
        intro: 'Danh sách <b>hồ sơ của tôi</b>',
        position: 'bottom'
      },
      {
        element: '#step9',
        intro: 'Tab trạng thái hồ sơ của tôi',
        position: 'bottom'
      },
      {
        element: '#step10',
        intro: 'Thanh tìm kiếm hồ sơ',
        position: 'bottom'
      },
      {
        element: '#step11',
        intro: 'Tìm kiếm nâng cao với tên hồ sơ và trạng thái',
        position: 'bottom'
      },
      {
        element: '#step12',
        intro: 'Chức năng <b>Thủ tục hành chính</b>',
        position: 'bottom'
      },
      {
        element: '#step13',
        intro: 'Danh sách thủ tục hành chính',
        position: 'bottom'
      },
      {
        element: '#step14',
        intro: 'Trạng thái của thủ tục hành chính bao gồm <b>Tất cả</b> và <b>Mới thay đổi</b>',
        position: 'bottom'
      },
      {
        element: '#step15',
        intro: 'Thanh tìm kiếm thủ tục hành chính',
        position: 'bottom'
      },
      {
        element: '#step16',
        intro: 'Tìm kiếm nâng cao với tên thủ tục và trạng thái',
        position: 'bottom'
      },
      {
        element: '#step17',
        intro: 'Chức năng nộp hồ sơ',
        position: 'bottom'
      },
      {
        element: '#step18',
        intro: 'Trang nộp hồ sơ',
        position: 'bottom'
      },
      {
        element: '#step19',
        intro: 'Chức năng mở rộng bao gồm <b>Thông tin tài khoản, Các chức năng mở rộng</>, Các chức năng cài đặt và liên quan đến ứng dụng',
        position: 'bottom'
      },
      {
        element: '#step20',
        intro: 'Chức năng liên quan đến tài khoản như: <b>Xem thông tin tài khoản, đổi mật khẩu , v.v</b>',
        position: 'bottom'
      },
      {
        element: '#step21',
        intro: 'Nhóm chức năng mở rộng bao gồm: <b>Phản ánh kiến nghị,Trật tự đô thị, Tra cứu quy hoạch, Trưng cầu, v.v</b>',
        position: 'bottom'
      },
      {
        element: '#step22',
        intro: 'Nhóm chức năng cài đặt hiệu chỉnh ứng dụng theo ý bạn',
        position: 'bottom'
      },
      {
        element: '#step23',
        intro: 'Nhóm ứng dụng cung cấp thông tin ứng dụng và đánh giá',
        position: 'bottom'
      },
      {
        element: '#step24',
        intro: 'Đăng xuất tài khoản',
        position: 'bottom'
      }]
    }).start().onbeforechange(function (targetElement) {
      switch (targetElement.id) {
        case "step2":
          break;
        case "step4":
          self.typeWriter(true);
          break;
        case "step5":
          document.getElementById('guide').classList.remove('hidden');
          document.getElementById('step6').classList.add('hidden');
          self.typeWriter();
          break;
        case "step6":
          document.getElementById('guide').classList.add('hidden');
          document.getElementById('step6').classList.remove('hidden');
          document.getElementById('tracuu').classList.remove('hidden');
          document.getElementById('hoso').classList.add('hidden');
          self.typeWriter(true);
          break;
        case "step7":
          document.getElementById('tracuu').classList.add('hidden');
          document.getElementById('hoso').classList.remove('hidden');
          break;
        case "step9":
          document.getElementById('step10').classList.remove('style2-1');
          break;
        case "step10":
          document.getElementById('step10').classList.add('style2-1');
          break;
        case "step11":
          document.getElementById('step10').classList.remove('style2-1');
          document.getElementById('hoso').classList.remove('hidden');
          document.getElementById('thutuc').classList.add('hidden');
          break;
        case "step12":
          document.getElementById('hoso').classList.add('hidden');
          document.getElementById('thutuc').classList.remove('hidden');
          break;
        case "step14":
          document.getElementById('step15').classList.remove('style2-1');
          break;
        case "step15":
          document.getElementById('step15').classList.add('style2-1');
          break;
        case "step16":
          document.getElementById('step15').classList.remove('style2-1');
          document.getElementById('thutuc').classList.remove('hidden');
          document.getElementById('step18').classList.add('hidden');
          break;
        case "step17":
          document.getElementById('thutuc').classList.add('hidden');
          document.getElementById('step18').classList.remove('hidden');
          break;
        case "step18":
          document.getElementById('step18').classList.remove('hidden');
          document.getElementById('caidat').classList.add('hidden');
          break;
        case "step19":
          document.getElementById('step18').classList.add('hidden');
          document.getElementById('caidat').classList.remove('hidden');
          break;
      }
    }).onexit(function () {
      self.navCtrl.setRoot('TabsPage');
    });
  }

  typeWriter(stop?: boolean) {
    let input = document.getElementById('step5');
    let typewriter = new Typewriter(input, {
      strings: ['777022015CPLD00132', '1541511924666'],
      delay: 80,
      loop: true,
      autoStart: true,
    });

    if (stop) {
      typewriter = new Typewriter(input, {
        delay: 5,
      })
      typewriter.typeString('Mã số tra cứu hoặc số biên nhận').pauseFor(50000).start();
    }
  }
}
