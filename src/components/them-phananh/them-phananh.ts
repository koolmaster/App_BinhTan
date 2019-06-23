import { Component } from '@angular/core';
import { PhanAnhService } from '../../providers/service/phanAnhService';
import { isEmpty, isNil } from 'lodash';
import { AlertService } from '../../providers/service/alertService';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'them-phananh',
  templateUrl: 'them-phananh.html'
})
export class ThemPhananhComponent {
  txtTieuDe: any;
  txtHoTen: any;
  txtDienThoai: any;
  txtEmail: any;
  txtSoNha: any;
  txtQuanHuyen: any;
  txtPhuongXa: any;
  txtLinhVuc: any;
  txtNoiDung: any;

  files = [];
  fileNames = [];
  fileNameType = [];
  inputfile: any;

  lstQuanHuyen: any;
  lstPhuongXa: any;
  lstLinhVuc: any;

  constructor(
    public themphananh: PhanAnhService,
    public alert: AlertService,
    public navCtrl: NavController
  ) {

  }

  ionViewDidLoad() {
    this.loadQuanHuyen();
    this.loadLinhVuc();
  }

  loadQuanHuyen() {
    let param = {
      TinhThanhID: 51
    }
    this.themphananh.getListQuanHuyen(param).then(data => {
      let temp = data;
      if (isEmpty(temp) || isNil(temp)) {
        this.alert.showToast("error", "Không có dữ liệu để hiển thị");
      } else {
        this.lstQuanHuyen = temp;
      }
    }, (error) => {
      this.alert.showToast("error", "Lỗi kết nối");
    })
  }

  loadPhuongXa(QuanHuyenID) {
    let param = {
      QuanHuyenID: QuanHuyenID
    }
    this.themphananh.getListPhuongXa(param).then(data => {
      let temp = data;
      if (isEmpty(temp) || isNil(temp)) {
        this.alert.showToast("error", "Không có dữ liệu để hiển thị");
      } else {
        this.lstPhuongXa = temp;
        this.txtPhuongXa = this.loadPhuongXa[0];
      }
    }, (error) => {
      this.alert.showToast("error", "Lỗi kết nối");
    })
  }

  loadLinhVuc() {
    this.themphananh.getListLinhVuc().then(data => {
      let temp = data;
      if (isEmpty(temp) || isNil(temp)) {
        this.alert.showToast("error", "Không có dữ liệu để hiển thị");
      } else {
        this.lstLinhVuc = temp;
      }
    }, (error) => {
      this.alert.showToast("error", "Lỗi kết nối");
    })
  }

  changePhuongXa(txtQuanHuyen) {
    this.loadPhuongXa(txtQuanHuyen.QuanHuyenID);
  }

  addfile(file) {
    var self = this;
    let files = file._native.nativeElement.files;
    var filee;
    let avatarname;
    let avatartype;
    let type;
    let fileName1;
    let dataListFileName;
    if (this.fileNames.length < 5) {
      for (let i = 0; i < files.length; i++) {
        let fr = new FileReader();
        filee = files[i];
        avatarname = filee.name;
        avatartype = filee.type;
        type = avatarname.substr(avatarname.lastIndexOf('.') + 1, avatarname.length);
        fileName1 = filee.name;
        dataListFileName = {
          fileName: fileName1,
          Type: type
        }
        this.fileNames.push(dataListFileName);
        this.files.push(filee);
        fr.onload = function (e) {
          let temp: any;
          temp = e;
          var avatarbase64 = temp.target.result.substring(temp.target.result.indexOf(",") + 1, temp.target.result.length);
          let fomrUpload = {
            "FileID": "",
            "Type": type,
            "Base64": avatarbase64
          }
          self.themphananh.upLoadFile(fomrUpload).then(data => {
            let idFile = data;
            let fomrDataFile = fileName1 + "|" + idFile;
            self.fileNameType.push(fomrDataFile);
          }, (error) => {
            console.log(error);
            self.alert.showAlert("error", "Lỗi kết nối upload file");
          });
        }
        fr.readAsDataURL(filee);
      }
    } else {
      self.alert.showAlert("error", "upload tối đa 5 file");
    }
  }

  removeFile(index) {
    this.files.splice(index, 1);
    this.fileNames.splice(index, 1);
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  addNewPhanAnh() {
    let flag = 1;
    if (isEmpty(this.txtHoTen) || isNil(this.txtHoTen)) {
      this.alert.showToast("error", "Chưa nhập họ tên");
      flag = 0;
    }
    if (isEmpty(this.txtDienThoai) || isNil(this.txtDienThoai)) {
      // this.alert.showToast("error", "Chưa nhập điện thoại");
      // flag = 0;
      this.txtDienThoai = '';
    }
    if (isEmpty(this.txtEmail) || isNil(this.txtEmail)) {
      this.alert.showToast("error", "Chưa nhập email");
      flag = 0;
    } else if (!this.validateEmail(this.txtEmail)) {
      this.alert.showToast("error", "Email chưa đúng định dạng");
      flag = 0;
    }
    if (isEmpty(this.txtSoNha) || isNil(this.txtSoNha)) {
      // this.alert.showToast("error", "Chưa nhập địa chỉ");
      // flag = 0;
      this.txtSoNha = ''
    }
    if (isEmpty(this.txtPhuongXa) || isNil(this.txtPhuongXa)) {
      // this.alert.showToast("error", "Chưa chọn phương xã");
      // flag = 0;
      this.txtPhuongXa = '';
      this.txtQuanHuyen = '';
    }
    if (isEmpty(this.txtTieuDe) || isNil(this.txtTieuDe)) {
      this.alert.showToast("error", "Chưa nhập tiêu đề");
      flag = 0;
    }
    if (isEmpty(this.txtNoiDung) || isNil(this.txtNoiDung)) {
      this.alert.showToast("error", "Chưa nhập nội dung");
      flag = 0;
    }
    if (isEmpty(this.txtLinhVuc) || isNil(this.txtLinhVuc)) {
      this.alert.showToast("error", "Chưa chọn lĩnh vực");
      flag = 0;
    }
    if (flag == 1) {
      let diachi;
      if (this.txtSoNha == '') {
        diachi = this.txtSoNha;
      } else {
        diachi = `${this.txtSoNha} ${this.txtPhuongXa.TenPhuongXa} ${this.txtQuanHuyen.TenQuanHuyen}`;
      }
      let param = {
        nguoidangkyid: 0,
        hotennguoihoi: this.txtHoTen,
        dienthoainguoihoi: this.txtDienThoai,
        emailnguoihoi: this.txtEmail,
        diachi: diachi,
        tenphuongxa: this.txtPhuongXa.TenPhuongXa,
        phuongxaid: this.txtPhuongXa.PhuongXaID,
        tieude: this.txtTieuDe,
        noidungtext: this.txtNoiDung,
        taptindinhkems: this.fileNameType.join("/"),
        linhvucid: this.txtLinhVuc.PAKNLoaiID,
        tenlinhvuc: this.txtLinhVuc.Ten
      }
      this.themphananh.addNewPhanAnh(param).then(data => {
        if (data == 'True') {
          this.alert.showToast("success", "Thêm phản ánh thành công");
          this.navCtrl.pop();
        }
      }, (error) => {
        this.alert.showToast("error", "Lỗi kết nối");
      })
    }
  }
}
