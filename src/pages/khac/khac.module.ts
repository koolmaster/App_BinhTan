import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KhacPage } from './khac';

@NgModule({
  declarations: [
    KhacPage,
  ],
  imports: [
    IonicPageModule.forChild(KhacPage),
  ],
})
export class KhacPageModule {}
