import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { IntroPage } from '../pages/intro/intro';
import { IntroSlidePage } from '../pages/intro-slide/intro-slide';
import { ServicePage } from '../pages/service/service';
import { PackagePage } from '../pages/package/package';
import { CheckoutPage } from '../pages/checkout/checkout';
import { OrderPage } from '../pages/order/order';
import { ConfigPage } from '../pages/config/config';
import { ChatPage } from '../pages/chat/chat';

import { AuthService } from '../providers/auth-service/auth-service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ServiceProvider } from '../providers/service/service';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    IntroPage,
    IntroSlidePage,
    ServicePage,
    PackagePage,
    CheckoutPage,
    OrderPage,
    ConfigPage,
    ChatPage
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  exports: [ ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    IntroPage,
    IntroSlidePage,
    ServicePage,
    PackagePage,
    CheckoutPage,
    OrderPage,
    ConfigPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    ServiceProvider
  ]
})
export class AppModule {}
