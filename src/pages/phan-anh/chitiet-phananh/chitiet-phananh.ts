import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { isEmpty, isNil } from 'lodash';
import { FileApiProvider } from '../../../providers/const/file.api';
import { File, IWriteOptions } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { PhanAnhService } from '../../../providers/service/phanAnhService';
import { AlertService } from '../../../providers/service/alertService';
import { FileModel } from '../../../providers/models/PhanAnh.model';

@IonicPage()
@Component({
  selector: 'page-chitiet-phananh',
  templateUrl: 'chitiet-phananh.html',
  providers: [FileApiProvider, File, FileOpener]
})
export class ChitietPhananhPage {
  hoiDapID = this.navParams.get('hoiDapID');
  chitietPA: any;
  arrFile: FileModel[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fileapi: FileApiProvider,
    public file: File,
    private fileOpener: FileOpener,
    public platform: Platform,
    public phananhchitiet: PhanAnhService,
    public alert: AlertService
  ) {
  }

  ionViewDidLoad() {
    this.loadChiTiet();
  }

  loadChiTiet() {
    let param = {
      hoiDapID: this.hoiDapID
    }
    this.phananhchitiet.getDetailPhanAnh(param).then(data => {
      this.chitietPA = data;
      if (!isEmpty(this.chitietPA.ListFile) || !isNil(this.chitietPA.ListFile)) {
        this.chitietPA.ListFile.forEach(ele => {
          ele.fileType = ele.fileName.substring(ele.fileName.lastIndexOf('.') + 1, ele.fileName.length).toLowerCase()
        });
      }
      if (!isEmpty(this.chitietPA.ListFileTL) || !isNil(this.chitietPA.ListFileTL)) {
        this.chitietPA.ListFileTL.forEach(ele => {
          ele.fileType = ele.fileName.substring(ele.fileName.lastIndexOf('.') + 1, ele.fileName.length).toLowerCase()
        });
      }
    }, (error) => {
      this.alert.showToast("error", "Lỗi kết nối");
    })
  }

  openFile(file) {
    console.log(file);
    let paramsFile = {
      "FileID": file.fileID,
      "Type": file.fileType,
      "Base64": ""
    }
    let self = this;
    this.phananhchitiet.downLoadFile(paramsFile).then(obj => {
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
}
