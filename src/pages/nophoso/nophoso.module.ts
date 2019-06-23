import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NophosoPage } from './nophoso';
import { IonSimpleWizard } from '../../providers/plugin/ion-simple-wizard/ion-simple-wizard.component';
import { IonSimpleWizardStep } from '../../providers/plugin/ion-simple-wizard/ion-simple-wizard.step.component';

@NgModule({
  declarations: [
    NophosoPage,
    IonSimpleWizard,
    IonSimpleWizardStep,
  ],
  imports: [
    IonicPageModule.forChild(NophosoPage),
  ],
})
export class NophosoPageModule {}
