import { Injectable } from '@angular/core';
import { ApiProvider } from '../../providers/const/api';
import { CONST } from '../const/const';
import { API_THONGBAO } from '../const/const.api';
import { ThongBaoModel } from '../models/ThongBao.model';
@Injectable()
export class ThongBaoService {
    base = CONST.BASE_MOBILECC;
    objGetApiDS = API_THONGBAO.dsthongbao;
    objGetApiCT = API_THONGBAO.ctthongbao;
    constructor(public api: ApiProvider) {

    }
    getListThongBao(params): Promise<ThongBaoModel> {
        return this.api.call(this.base, this.objGetApiDS, params);
    }
    getDetailsThongBao(params) {
        return this.api.call(this.base, this.objGetApiCT, params);
    }
}