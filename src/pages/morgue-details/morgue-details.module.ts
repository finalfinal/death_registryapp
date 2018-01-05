import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MorgueDetailsPage } from './morgue-details';

@NgModule({
  declarations: [
    MorgueDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MorgueDetailsPage),
  ],
})
export class MorgueDetailsPageModule {}
