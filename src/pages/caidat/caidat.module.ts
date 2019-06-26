import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaidatPage } from './caidat';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CaidatPage,
  ],
  imports: [
    IonicPageModule.forChild(CaidatPage),
    TranslateModule
  ],
})
export class CaidatPageModule {}
