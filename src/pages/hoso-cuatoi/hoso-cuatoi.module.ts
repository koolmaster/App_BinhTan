import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HosoCuatoiPage } from './hoso-cuatoi';
import { SkeletonModule } from '../../skeleton/skeleton.module';

@NgModule({
  declarations: [
    HosoCuatoiPage,
  ],
  imports: [
    SkeletonModule,
    IonicPageModule.forChild(HosoCuatoiPage),
  ],
})
export class HosoCuatoiPageModule {}
