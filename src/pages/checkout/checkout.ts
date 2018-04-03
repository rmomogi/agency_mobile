import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { ServicePage } from '../service/service'
import { PackagePage } from '../package/package'
import { LoginPage } from '../login/login'

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  
  public services = []
  public packages = []

  servicePage = ServicePage
  packagePage = PackagePage

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl:ToastController,
              public serviceProvider:ServiceProvider,
              public storage: Storage) {    
  }  

  ionViewDidLoad() {
    this.serviceProvider.get().then((result) => {      
      for(let item of result){
        if(item.package){
          this.packages.push(item)
        }else{
          this.services.push(item)
        }
      }
    }, (err) => {
      this.presentToast('A sua sessão expirou!')
      this.storage.set('logged', false)
      this.navCtrl.setRoot(LoginPage)
    })    
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });   
    toast.present();
  }
}
