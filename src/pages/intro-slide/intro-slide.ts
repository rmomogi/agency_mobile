import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login'

@IonicPage()
@Component({
  selector: 'page-intro-slide',
  templateUrl: 'intro-slide.html',
})
export class IntroSlidePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  navHome(){
  	this.navCtrl.setRoot(LoginPage)
  }

}
