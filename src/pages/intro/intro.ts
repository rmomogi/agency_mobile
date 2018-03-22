import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IntroSlidePage } from '../intro-slide/intro-slide';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  navIntroSlide(){
  	this.navCtrl.setRoot(IntroSlidePage)
  }

}
