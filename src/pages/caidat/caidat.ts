import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LanguageModel } from '../../providers/models/language.model';
import { LanguageService } from '../../providers/service/utils/language.service';
import { TranslateService } from '@ngx-translate/core';

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


}
