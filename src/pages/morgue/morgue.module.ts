import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MorguePage } from './morgue';

@NgModule({
  declarations: [
    MorguePage,
  ],
  imports: [
    IonicPageModule.forChild(MorguePage),
  ],
})
export class MorguePageModule {}
