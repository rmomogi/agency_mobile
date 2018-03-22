import { Component } from '@angular/core';
import { LoadingController, ToastController, NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service'
import { LoginPage } from '../login/login'

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
	
	loading: any;
	registerData = { email: '', password: '', fullName: '', phone: ''}

  constructor(public authService:AuthService, 
              public loadingCtrl:LoadingController, 
              public toastCtrl:ToastController,
              public nav:NavController) {
  }

  doRegister(){
  	this.showLoader();
    this.authService.register(this.registerData).then((result) => {
      this.loading.dismiss();
      this.nav.pop();
      this.presentToast('Acesso com o seu novo cadastro')
    }, (err) => {
      console.log(err);
      this.loading.dismiss();
      this.presentToast(err.json().message);
    })
  }

  showPageLogin(){
    this.nav.setRoot(LoginPage);
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Sending...'
    });
    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
