import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoadingController, ToastController, NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service'
import { HomePage } from '../home/home';
import { IntroPage } from '../intro/intro';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  @ViewChild('input') email ;
  loading: any;
  loginData = { email: '', password: ''}
  
  constructor(public authService:AuthService, 
              public loadingCtrl:LoadingController, 
              public toastCtrl:ToastController,
              public nav:NavController,
              public storage:Storage) { }

  doLogin() {
    this.showLoader();
    this.authService.login(this.loginData).then((result) => {
      this.loading.dismiss();
      this.nav.setRoot(HomePage);
      this.storage.set('logged', true)
    }, (err) => {      
      this.loading.dismiss();
      this.presentToast('O e-mail ou a senha está incorretas!');
    })
  }

  showPageRegister(){
    this.nav.setRoot('RegisterPage');
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Authenticating...'
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

  ionViewDidLoad(): void {
    
    this.storage.get('intro-done').then(done => {
      if (!done) {
        this.storage.set('intro-done', true);
        this.nav.setRoot(IntroPage);
      }
    });

    this.storage.get('logged').then(done => {
      if (done){
        this.nav.setRoot(HomePage);
      }
    })    
  }
}