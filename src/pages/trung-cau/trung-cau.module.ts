import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrungCauPage } from './trung-cau';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    TrungCauPage,
  ],
  imports: [
    NgxChartsModule,
    IonicPageModule.forChild(TrungCauPage),
  ],
})
export class TrungCauPageModule {}
