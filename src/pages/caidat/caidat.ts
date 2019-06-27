import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LanguageModel } from '../../providers/models/language.model';
import { LanguageService } from '../../providers/service/utils/language.service';
import { TranslateService } from '@ngx-translate/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-caidat',
  templateUrl: 'caidat.html',
})
export class CaidatPage {
  languageSelected: any = 'vn';
  languages: Array<LanguageModel>;
  constructor(
    public navCtrl: NavController,
    public languageService: LanguageService,
    public translate: TranslateService,
    private iab: InAppBrowser,
    public navParams: NavParams
  ) {
    this.languages = this.languageService.getLanguages();
    this.setLanguage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaidatPage');
  }

  goPage(val) {
    switch (val) {
      case 0:
        this.navCtrl.push('CanhanPage');
        break;
      case 1:
        this.navCtrl.push('DoimatkhauPage');
        break;
      case 2:
        this.navCtrl.push('QuyhoachPage');
        break;

      case 3:
        this.navCtrl.push('TrattudothiPage');
        break;

      case 4:
        this.navCtrl.push('PhanAnhPage');
        break;

      case 5:
        this.navCtrl.push('TrungCauPage');
        break;

      case 10:
        this.navCtrl.push('HuongdansudungPage');
        break;

      case 14:
        this.navCtrl.push('LoginPage');
        break;

      default:
        break;
    }
  }

  setLanguage() {
    let defaultLanguage = this.translate.getDefaultLang();
    if (this.languageSelected) {
      this.translate.setDefaultLang(this.languageSelected);
      this.translate.use(this.languageSelected);
    } else {
      this.languageSelected = defaultLanguage;
      this.translate.use(defaultLanguage);
    }
  }

  gotoNo() {
    this.navCtrl.push('ThongbaoPage');
  }
}
