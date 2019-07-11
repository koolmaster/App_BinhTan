import { Injectable } from '@angular/core';
import { ApiProvider } from '../../providers/const/api';
import { CONST } from '../const/const';
import { API_QuanLyThuTuc } from '../const/const.api';
@Injectable()
export class QuanLyThuTucService {
    base = CONST.BASE_BINHTAN;
    objPostDanhSach = API_QuanLyThuTuc.postDanhSach; 
    objGetChiTiet = API_QuanLyThuTuc.getChiTiet;
    constructor(public api: ApiProvider) {

    }
    postDanhSach(params) {
        return this.api.callBinhTan(this.base, this.objPostDanhSach, params);
      };
    getChiTiet(params) {
        return this.api.callBinhTan(this.base, this.objGetChiTiet, params);
      };
}