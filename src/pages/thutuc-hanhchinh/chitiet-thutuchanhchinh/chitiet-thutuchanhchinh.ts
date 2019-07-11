import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chitiet-thutuchanhchinh',
  templateUrl: 'chitiet-thutuchanhchinh.html',
})
export class ChitietThutuchanhchinhPage {
  @ViewChild(Navbar) navBar: Navbar;
  elements = document.querySelectorAll(".tabbar");

  showTab = false;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController) {
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
    debugger;
    var id:any;
    id = this.navParams.get("params");
  }


  presentFilterModal() {
    let profileModal = this.modalCtrl.create('PopupGopyPage');
    profileModal.present();
  }

}
