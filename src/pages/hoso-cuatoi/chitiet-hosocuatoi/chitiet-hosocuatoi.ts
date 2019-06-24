import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chitiet-hosocuatoi',
  templateUrl: 'chitiet-hosocuatoi.html',
})
export class ChitietHosocuatoiPage {
  @ViewChild(Navbar) navBar: Navbar;
  elements = document.querySelectorAll(".tabbar");
  showTab = false;
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
  }

}
