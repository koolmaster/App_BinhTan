import { Component } from '@angular/core';

/**
 * Generated class for the DoimatkhauComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'doimatkhau',
  templateUrl: 'doimatkhau.html'
})
export class DoimatkhauComponent {

  text: string;

  constructor() {
    console.log('Hello DoimatkhauComponent Component');
    this.text = 'Hello World';
  }

}
