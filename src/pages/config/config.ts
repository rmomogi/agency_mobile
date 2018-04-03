import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login'

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  constructor(public navCtrl: NavController, 
  						public navParams: NavParams,
  						public storage: Storage) {
  }

  logout(){
  	this.storage.set('logged', false)
  	this.navCtrl.setRoot(LoginPage)
  }

}
