import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-package',
  templateUrl: 'package.html',
})
export class PackagePage {
	
	public items = []

  constructor(public navCtrl: NavController, public navParams: NavParams) { 
  	this.items = navParams.data
  }

}
