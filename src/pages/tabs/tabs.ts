import { Component } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';
import { CanhanPage } from '../canhan/canhan';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  selectedTabIndex = 3;
  hoso: any = 'HosoCuatoiPage';
  thutuc: any = 'ThutucHanhchinhPage';
  tracuu: any = 'TracuuHosoPage';
  nophoso: any = 'NophosoPage';
  profile: any = CanhanPage;
  constructor(public navParams: NavParams) {

  }

}
