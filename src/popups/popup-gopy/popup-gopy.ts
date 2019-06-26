import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-popup-gopy',
  templateUrl: 'popup-gopy.html',
})
export class PopupGopyPage {
  @ViewChild('msgInput') msgInput: ElementRef;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopupGopyPage');
  }

  back() {
    this.viewCtrl.dismiss();
  }

  resize() {
    var element = this.msgInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
    var scrollHeight = element.scrollHeight;
    element.style.height = scrollHeight + 'px';
    this.msgInput['_elementRef'].nativeElement.style.height = (scrollHeight + 0) + 'px';
  }

}
