import { Injectable } from '@angular/core';
import { ApiProvider } from '../../providers/const/api';
import { CONST } from '../const/const';
import { API_TRUNGCAU } from '../const/const.api';
import { DanhSachModel } from '../models/TrungCau.model';

@Injectable()
export class TrungCauService {
    baseXuLy = CONST.BASE_MOBILECC;
    ojbGetDSTrungCau = API_TRUNGCAU.dstrungcau;
    ojbPostBieuQuyet = API_TRUNGCAU.bieuquyet;
    ojbGetChiTietTrungCau = API_TRUNGCAU.chitiettrungcau;
    constructor(public api: ApiProvider) { }

    getDanhSach(params): Promise<DanhSachModel> {
        return this.api.call(this.baseXuLy, this.ojbGetDSTrungCau, params);
    }
    postBieuQuyet(params) {
        return this.api.callWithout(this.baseXuLy, this.ojbPostBieuQuyet, params);
    }
    getChitiet(params): Promise<DanhSachModel> {
        return this.api.call(this.baseXuLy, this.ojbGetChiTietTrungCau, params);
    }
}