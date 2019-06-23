import { Component } from '@angular/core';

/**
 * Generated class for the ThongtinUngdungComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'thongtin-ungdung',
  templateUrl: 'thongtin-ungdung.html'
})
export class ThongtinUngdungComponent {

  text: string;

  constructor() {
    console.log('Hello ThongtinUngdungComponent Component');
    this.text = 'Hello World';
  }

}
