import { Component } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';

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
  caidat: any = 'CaidatPage';
  constructor(public navParams: NavParams) {

  }

}
