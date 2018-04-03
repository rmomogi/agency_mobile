import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
})
export class ServicePage {	

	public items = []
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.items = navParams.data
  }

}
