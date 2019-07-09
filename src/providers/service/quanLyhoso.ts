import { Injectable } from '@angular/core';
import { ApiProvider } from '../../providers/const/api';
import { CONST } from '../const/const';
import { API_QuanLyHoSo } from '../const/const.api';
@Injectable()
export class QuanLyHoSoService {
    base = CONST.BASE_BINHTAN;
    objGetApiSearchHoSo = API_QuanLyHoSo.searchHoSo;
    constructor(public api: ApiProvider) {

    }
    searchHoSo(params) {
        return this.api.callBinhTan(this.base, this.objGetApiSearchHoSo, params);
      };
}