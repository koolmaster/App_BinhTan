import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams ,Slides, Navbar} from 'ionic-angular';

/**
 * Generated class for the HuongdansudungPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-huongdansudung',
  templateUrl: 'huongdansudung.html',
})
export class HuongdansudungPage {
  @ViewChild(Slides) slides: Slides;
  @ViewChild(Navbar) navBar: Navbar;
  tabs = "0";
  firstLoad = true;
  showTab = false;
  show = false;
  elements = document.querySelectorAll(".tabbar");

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (this.elements != null) {
      Object.keys(this.elements).map((key) => {
        this.elements[key].style.display = 'none';
      });
    }
  }

  ionViewWillLeave() {
    if (this.showTab) {
      Object.keys(this.elements).map((key) => {
        this.elements[key].style.display = 'flex';
      });
    }
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = (ev: UIEvent) => {
      this.showTab = true;
      this.navCtrl.pop();
    };

    setTimeout(() => {
      this.show = true;
    }, 2000);
  }

  onTabChange(val) {
    this.slides.slideTo(val, 300);
    let temp = document.querySelector('.row2-2');
    temp.setAttribute('style', '--i:' + val);
  }

  moveTab($event) {
    this.tabs = $event._snapIndex.toString();
    let temp = document.querySelector('.row2-2');
    this.firstLoad = false;
    temp.setAttribute('style', '--i:' + $event._snapIndex);
  }
}
