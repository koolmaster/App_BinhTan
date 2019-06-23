import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { isEmpty, isNil } from 'lodash';
import { AnNinhTratTuService } from '../../../providers/service/anNinhTratTuService';
import { AlertService } from '../../../providers/service/alertService';
import { File, IWriteOptions } from '@ionic-native/file';
import { CONST } from '../../../providers/const/const';
import { FileApiProvider } from '../../../providers/const/file.api';
import { FileOpener } from '@ionic-native/file-opener';
import { PhanAnhService } from '../../../providers/service/phanAnhService';

@IonicPage()
@Component({
  selector: 'page-chitiet-anninhtrattu',
  templateUrl: 'chitiet-anninhtrattu.html',
  providers: [FileApiProvider, File, FileOpener]
})
export class ChitietAnninhtrattuPage {
  show = false;
  chitietANTT: any;
  count = 1;
  lstTinTuc = [];
  listImg = [];
  LoaiAnNinh = this.navParams.get('LoaiAnNinh');
  AnNinhTratTuID = this.navParams.get('AnNinhTratTuID');
  goTo = this.navParams.get('goTo');

  txtNameBaoTin: any;
  txtSDTBaoTin: any;
  txtInfoBaoTin: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private ctanninh: AnNinhTratTuService,
    public fileapi: FileApiProvider,
    public file: File,
    private fileOpener: FileOpener,
    public platform: Platform,
    public phananhchitiet: PhanAnhService,
    public alert: AlertService
  ) {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'none';
      });
    }
  }

  ionViewDidEnter() {
    this.loadChiTiet();
  }

  ionViewWillLeave() {
    if (this.goTo == 0) {
      let elements = document.querySelectorAll(".tabbar");
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'flex';
      });
    }
  }

  changePage() {
    this.show = !this.show;
  }

  loadChiTiet() {
    let param = {
      AnNinhTratTuID: this.AnNinhTratTuID
    }
    this.ctanninh.getCTAnNinhTratTu(param).then(data => {
      this.chitietANTT = data;
      console.log(this.chitietANTT);
      switch (this.chitietANTT.GioiTinh) {
        case 0:
          this.chitietANTT.GioiTinh = 'Nữ'
          break;
        case 1:
          this.chitietANTT.GioiTinh = 'Nam'
          break;
        case 3:
          this.chitietANTT.GioiTinh = 'Khác'
          break;
        default:
          break;
      }
      if (!isEmpty(this.chitietANTT.ListFile) || !isNil(this.chitietANTT.ListFile)) {
        this.chitietANTT.ListFile.forEach(ele => {
          ele.fileType = ele.fileName.substring(ele.fileName.lastIndexOf('.') + 1, ele.fileName.length).toLowerCase()
        });
      }
      let paramds = {
        TuKhoa: "",
        LoaiAnNinh: this.LoaiAnNinh,
        DonViID: 0,
        pageIndex: 1,
        pageSize: 1000
      }
      let id = this.chitietANTT.LoaiAnNinh;
      this.ctanninh.getDSAnNinhTratTuWithout(paramds).then(datas => {
        let temp = datas;
        for (let i = 0; i < temp.length; i++) {
          if (this.chitietANTT.AnNinhTratTuID != temp[i].AnNinhTratTuID) {
            if (this.count < 6) {
              if (id == temp[i].LoaiAnNinh) {
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

  goPage(id, type) {
    this.navCtrl.push(ChitietAnninhtrattuPage, { AnNinhTratTuID: id, LoaiAnNinh: type });
  }

  openFile(file) {
    console.log(file);
    let paramsFile = {
      "FileID": file.fileID,
      "Type": file.fileType,
      "Base64": ""
    }
    let self = this;
    this.ctanninh.downLoadFile(paramsFile).then(obj => {
      let temp: any;
      temp = obj;
      let rest = file.fileName.substring(0, file.fileName.lastIndexOf(".") + 1);
      let nameFile = rest.split('.')[0];
      let base = this.fileapi.base64toBlob(temp, '.' + file.fileType.toLowerCase());
      let localDownloadPath = this.file.externalDataDirectory;
      if (this.platform.is('ios')) {
        localDownloadPath = this.file.documentsDirectory;
      } else if (this.platform.is('android')) {
        if (this.file.externalDataDirectory == null) {
          localDownloadPath = this.file.dataDirectory;
        }
      }
      let opt: IWriteOptions = { replace: true };
      this.file.writeFile(localDownloadPath, nameFile + '.' + file.fileType.toLowerCase(), base, opt)
        .then(function (success) {
          self.fileOpener.open(
            localDownloadPath + '/' + nameFile + '.' + file.fileType.toLowerCase(),
            self.fileapi.getFileMIMEType(file.fileName)
          ).then(() => self.alert.showToast("success", "Mở file thành công"))
            .catch(e => self.alert.showToast("error", "File không tồn tại"));
        }, function (err) {
          self.alert.showAlert("error", "Không thể ghi file, kiểm tra bộ nhớ thiết bị!");
        });

    }, (error) => {
      console.log(error);
    });
  }

  baotin() {
    let param = {
      HoTenNguoiBao: this.txtNameBaoTin,
      SoDienThoaiNguoiBao: this.txtSDTBaoTin,
      ThongTinDoiTuong: this.txtInfoBaoTin,
      AnNinhTratTuId: this.AnNinhTratTuID
    }
    this.ctanninh.postBaoTinTruyNa(param).then(data => {
      if (data == 'True') {
        this.alert.showToast("success", "Báo tin thành công");
        this.navCtrl.pop();
      }
    }, (error) => {
      this.alert.showToast("error", "Lỗi kết nối");
    })
  }

}
