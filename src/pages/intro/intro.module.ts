import { NgModule } from '@angular/core';
import { IonicPageModule, NavController } from 'ionic-angular';
import { IntroPage } from './intro';

@NgModule({
  declarations: [
    IntroPage,
  ],
  imports: [
    IonicPageModule.forChild(IntroPage),
  ],
})
export class IntroPageModule {
	constructor(){}
}