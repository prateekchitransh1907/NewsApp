import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SourcePage } from '../pages/source/source';
import { NewsServiceProvider } from '../providers/news-service/news-service';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LandingPage } from "../pages/landing/landing";
import { InnerPage } from "../pages/inner/inner";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SourcePage,
    LandingPage,
    InnerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SourcePage,
    LandingPage,
    InnerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsServiceProvider
  ]
})
export class AppModule {}
