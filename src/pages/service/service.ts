import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
})
export class ServicePage {
	
	public results = [];

  constructor(public navCtrl: NavController, private storage: Storage) {
  }

  ionViewDidEnter() {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicePage');
  }

}
