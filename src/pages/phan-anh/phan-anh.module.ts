import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhanAnhPage } from './phan-anh';
import { ThemPhananhComponent } from '../../components/them-phananh/them-phananh';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    PhanAnhPage,
  ],
  imports: [
    IonicPageModule.forChild(PhanAnhPage),
  ]
})
export class PhanAnhPageModule {}
