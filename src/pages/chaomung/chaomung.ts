import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chaomung',
  templateUrl: 'chaomung.html',
})
export class ChaomungPage {
  @ViewChild(Slides) slides: Slides;
  addclass = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.slides._allowSwipeToPrev = false;
  }

  moveTab($event) {
    switch ($event._snapIndex) {
      case 0:
        this.slides._allowSwipeToPrev = false;
        break;
      case 2:
        this.slides._allowSwipeToNext = false;
        this.slides.pager = false;
        this.addclass = true;
        break;

      default:
        this.slides.pager = true;
        this.slides._allowSwipeToPrev = true;
        this.slides._allowSwipeToNext = true;
        this.addclass = false;
        break;
    }
  }

  goPage() {
    this.navCtrl.setRoot('IntroPage')
  }

}
