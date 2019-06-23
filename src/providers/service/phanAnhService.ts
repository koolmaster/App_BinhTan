import { Injectable } from '@angular/core';
import { ApiProvider } from '../../providers/const/api';
import { CONST } from '../const/const';
import { API_PHANANH } from '../const/const.api';
import { PhanAnhModel, ChiTietPhanAnhModel, QuanHuyenModel, PhuongXaModel } from '../models/PhanAnh.model';


@Injectable()
export class PhanAnhService {
    base = CONST.BASE_MOBILECC;
    objGetApiDS = API_PHANANH.dsphananh;
    objGetApiDSQuanHuyen = API_PHANANH.dsquanhuyen;
    objGetApiDSPhuongXa = API_PHANANH.dsphuongxa;
    objGetApiDSLinhVuc = API_PHANANH.dslinhvuc;
    objGetApiChitiet = API_PHANANH.chitietphananh;
    objAPiUpLoadFile = API_PHANANH.uploadFile;
    objAPiDownLoadFile = API_PHANANH.downloadFile;
    objAPiPostAddNew = API_PHANANH.taomoiPhanAnh;
    constructor(public api: ApiProvider) {

    }
    getListPhanAnh(params): Promise<PhanAnhModel> {
        return this.api.call(this.base, this.objGetApiDS, params);
    }
    getDetailPhanAnh(params): Promise<ChiTietPhanAnhModel> {
        return this.api.call(this.base, this.objGetApiChitiet, params);
    }
    getListQuanHuyen(params): Promise<QuanHuyenModel> {
        return this.api.callWithout(this.base, this.objGetApiDSQuanHuyen, params);
    }
    getListPhuongXa(params): Promise<PhuongXaModel> {
        return this.api.callWithout(this.base, this.objGetApiDSPhuongXa, params);
    }
    getListLinhVuc() {
        return this.api.callWithout(this.base, this.objGetApiDSLinhVuc);
    }
    upLoadFile(params) {
        return this.api.call(this.base, this.objAPiUpLoadFile, params);
    }
    downLoadFile(params){
        return this.api.call(this.base, this.objAPiDownLoadFile, params);
    }
    addNewPhanAnh(params) {
        return this.api.call(this.base, this.objAPiPostAddNew, params);
    }
}