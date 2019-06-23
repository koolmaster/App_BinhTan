import { Injectable } from '@angular/core';
import { ApiProvider } from '../../providers/const/api';
import { CONST } from '../const/const';
import { API_ANNINHTRATTU } from '../const/const.api';
import { AnNinhTratTuModel, DetailAnNinhTratTuModel } from '../models/AnNinhTratTu.model';

@Injectable()
export class AnNinhTratTuService {
    baseLogin = CONST.BASE_MOBILECC;
    ojbGetDSAnNinhTratTu = API_ANNINHTRATTU.dsanninhtrattu;
    ojbGetCTAnNinhTratTu = API_ANNINHTRATTU.ctanninhtrattu;
    ojbPostBaoTinTruyNa = API_ANNINHTRATTU.baotintruyna;
    objAPiDownLoadFile = API_ANNINHTRATTU.downloadFile;
    constructor(public api: ApiProvider) {

    }
    getDSAnNinhTratTu(params): Promise<AnNinhTratTuModel> {
        return this.api.call(this.baseLogin, this.ojbGetDSAnNinhTratTu, params);
    }
    getDSAnNinhTratTuWithout(params): Promise<AnNinhTratTuModel> {
        return this.api.callWithout(this.baseLogin, this.ojbGetDSAnNinhTratTu, params);
    }
    getCTAnNinhTratTu(params): Promise<DetailAnNinhTratTuModel> {
        return this.api.call(this.baseLogin, this.ojbGetCTAnNinhTratTu, params);
    }
    postBaoTinTruyNa(params) {
        return this.api.call(this.baseLogin, this.ojbPostBaoTinTruyNa, params);
    }
    downLoadFile(params) {
        return this.api.call(this.baseLogin, this.objAPiDownLoadFile, params);
    }
}