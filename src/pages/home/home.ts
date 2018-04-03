import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { CheckoutPage } from '../checkout/checkout'
import { OrderPage } from '../order/order'
import { ConfigPage } from '../config/config'
import { LoginPage } from '../login/login'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
	
	checkoutPage     = CheckoutPage;
  orderPage        = OrderPage;  
  configPage       = ConfigPage;
    
  constructor(	
  				public navCtrl: NavController, 
  				public navParams: NavParams,
          public toastCtrl:ToastController) {  	
  }

}
