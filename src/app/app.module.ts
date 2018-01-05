import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MorgueDetailsPage } from '../pages/morgue-details/morgue-details';
//import { KinsmanPage } from '../pages/kinsman/kinsman';
//import { ThirdPage } from '../pages/third/third';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MorgueDetailsPage
    //KinsmanPage,
   // ThirdPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MorgueDetailsPage
    //KinsmanPage,
    //ThirdPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
