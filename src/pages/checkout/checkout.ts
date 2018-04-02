import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServiceProvider } from '../../providers/service/service'

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

	public services:any
	public packages:any
	
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {

  	this.storage.get('services').then(services => {  		
      this.services = services;
    })  

    this.storage.get('packages').then(packages => {    	
      this.packages = packages;
    })  

  }

  ionViewDidLoad() {

  }

}
