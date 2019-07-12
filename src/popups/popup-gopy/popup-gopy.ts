import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { QuanLyThuTucService } from '../../providers/service/quanLyThuTuc';
import { AlertService } from '../../providers/service/alertService';
import Swal from 'sweetalert2'
@IonicPage()
@Component({
  selector: 'page-popup-gopy',
  templateUrl: 'popup-gopy.html',
})
export class PopupGopyPage {
  @ViewChild('msgInput') msgInput: ElementRef;
  form_DongGop = {
    "thutucid": 0,
    "linhvucid": 0,
    "hotennguoihoi": '',
    "dienthoainguoihoi": '',
    "emailnguoihoi": '',
    "tieude": "",
    "noidungtext": '',
    "nguoidangkyid": 0,
    "taptindinhkem": ''
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alert: AlertService,
    public viewCtrl: ViewController,
    public quanlythutuc: QuanLyThuTucService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopupGopyPage');
  }

  back() {
    this.viewCtrl.dismiss();
  }
  postDongGop(){

    var _msg_err = '';
    if (this.form_DongGop.hotennguoihoi.length <= 0) _msg_err += 'Chưa nhập tên \n';
    if (this.form_DongGop.emailnguoihoi.length <= 0) _msg_err += 'Chưa nhập email \n';
    if (this.form_DongGop.dienthoainguoihoi.length <= 0) _msg_err += 'Chưa nhập số điện thoại \n';
    if (this.form_DongGop.tieude.length <= 0) _msg_err += 'Chưa nhập tiêu đề\n';
    // if (this.form_DongGop.linhvucid.length <= 0) _msg_err += 'Chưa nhập lĩnh vực </br>';
    if (this.form_DongGop.noidungtext.length <= 0) _msg_err += 'Chưa nhập nội dung \n';
    if (_msg_err !== '') {
      Swal.fire({
        title: 'Thông báo',
        text: _msg_err,
        type: 'error',
        confirmButtonText: 'Xác nhận'
      })
      return;
    }

    this.quanlythutuc.postGopY(this.form_DongGop).then(rep => {
      if (rep != null ){
        Swal.fire({
          title: 'Thông báo',
          text: "Đóng góp ý kiến thành công",
          type: 'success',
          confirmButtonText: 'Xác nhận'
        })
        this.navCtrl.pop();
      }
    }, (err) => {
      Swal.fire({
        title: 'Thông báo',
        text: "Lỗi kết nối",
        type: 'error',
        confirmButtonText: 'Xác nhận'
      })
    });

  }

  resize() {
    var element = this.msgInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
    var scrollHeight = element.scrollHeight;
    element.style.height = scrollHeight + 'px';
    this.msgInput['_elementRef'].nativeElement.style.height = (scrollHeight + 0) + 'px';
  }

}
