import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChitietTrungcauPage } from './chitiet-trungcau';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    ChitietTrungcauPage,
  ],
  imports: [
    NgxChartsModule,
    IonicPageModule.forChild(ChitietTrungcauPage),
  ],
})
export class ChitietTrungcauPageModule {}
