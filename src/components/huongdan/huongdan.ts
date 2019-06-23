import { Component } from '@angular/core';

/**
 * Generated class for the HuongdanComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'huongdan',
  templateUrl: 'huongdan.html'
})
export class HuongdanComponent {

  text: string;

  constructor() {
    console.log('Hello HuongdanComponent Component');
    this.text = 'Hello World';
  }

}
