import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { CheckoutPage } from '../checkout/checkout'
import { OrderPage } from '../order/order'
import { ChatPage } from '../chat/chat'
import { ConfigPage } from '../config/config'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
	
	checkout = CheckoutPage;
  order = OrderPage;
  chat = ChatPage;
  config = ConfigPage;
  
  constructor(	
  				public navCtrl: NavController, 
  				public navParams: NavParams,
  				public serviceProvider:ServiceProvider, ) {  	
  }

  ionViewDidLoad() {    
    
  }

}
