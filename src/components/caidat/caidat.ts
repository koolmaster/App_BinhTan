import { Component } from '@angular/core';

/**
 * Generated class for the CaidatComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'caidat',
  templateUrl: 'caidat.html'
})
export class CaidatComponent {

  text: string;

  constructor() {
    console.log('Hello CaidatComponent Component');
    this.text = 'Hello World';
  }

}
