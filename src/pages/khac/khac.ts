import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import * as launcher from '../../app/start-app.js';
/**
 * Generated class for the KhacPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-khac',
  templateUrl: 'khac.html',
})
export class KhacPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private inAppBrowser: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KhacPage');
  }
  openWebpage(url: string) {
    const options: InAppBrowserOptions = {
      zoom: 'no',
      location: 'yes'
    }

    // Opening a URL and returning an InAppBrowserObject
    const browser = this.inAppBrowser.create(url, '_blank', options);
    // browser.show();
    // Inject scripts, css and more with browser.X
  }
  goPage(val) {
    switch (val) {
      case 0:
        this.openWebpage('https://ql-quyhoach-q7.hochiminhcity.gov.vn');
        break;
      case 1:
          launcher.packageLaunch("com.examplemaps"); //
        // appStarter.check(function (values) {
        //   appStarter.start(function (compete) {
        //     console.log(compete);
        //   }, function(error) {
        //     console.log(error);
        //   });
        // }, function (error) { // not exists, open play market
        //   appStarter.set({
        //     "action": "ACTION_VIEW",
        //     "uri": "market://details?id=com.fpt.sohqkt"
        //   }).start();
        // });
        break;

      default:
        break;
    }
  }
}
