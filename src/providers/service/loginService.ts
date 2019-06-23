import { Injectable } from '@angular/core';
import { ApiProvider } from '../const/api';
import { CONST } from '../const/const';
import { USER_CONGDAN } from '../const/const.api';
import { ProfileModel } from '../models/Login.model';
import { CommentStmt } from '@angular/compiler';

@Injectable()
export class LoginService {
    baseLogin = CONST.BASE_MOBILECC;
    base = CONST.BASE;
    objApiGetinfo = USER_CONGDAN.User_Getinfo;
    objAPiCreate = USER_CONGDAN.User_Create;
    objAPiUpdate = USER_CONGDAN.User_Update;
    objApiSaveFireBase = USER_CONGDAN.registerFireBaseXLCV;
    constructor(public api: ApiProvider) {

    }
    postUserCreate(params) {
        return this.api.callLogin(this.baseLogin, this.objAPiCreate, params);
    }
    postUserUpdate(params){
        return this.api.callLogin(this.baseLogin, this.objAPiUpdate, params);
    }
    getUserInfo(params){
        return this.api.call(this.baseLogin, this.objApiGetinfo, params);
    }
    saveFireBase(params){
        return this.api.call(this.base, this.objApiSaveFireBase, params);
    }


}