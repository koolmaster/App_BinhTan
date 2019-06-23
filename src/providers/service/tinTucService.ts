import { Injectable } from '@angular/core';
import { ApiProvider } from '../../providers/const/api';
import { CONST } from '../const/const';
import { API_TINTUC } from '../const/const.api';
import { DetailTinTucModel, DSDetailTinTucModel } from '../models/TinTuc.model';

@Injectable()
export class TinTucService {
    baseXuLy = CONST.BASE_MOBILECC;
    ojbGetDSTinTuc = API_TINTUC.dstintuc;
    ojbGetCTTinTuc = API_TINTUC.chitiettintuc;
    constructor(public api: ApiProvider) { }
    postDSTinTuc(params): Promise<DSDetailTinTucModel> {
        return this.api.call(this.baseXuLy, this.ojbGetDSTinTuc, params);
    }
    postDSTinTucWithout(params): Promise<DSDetailTinTucModel> {
        return this.api.callWithout(this.baseXuLy, this.ojbGetDSTinTuc, params);
    }
    getChitiet(params): Promise<DetailTinTucModel> {
        return this.api.call(this.baseXuLy, this.ojbGetCTTinTuc, params);
    }
}