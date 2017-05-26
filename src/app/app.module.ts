import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './core/app.routing-module';

import { AppComponent } from './core/app.component';
import { MainPageComponent } from './core/mainPage/main-page.component';

import { PhoneService } from './services/phones';
import { PhoneComponent, PhoneDetailsComponent } from './component/phone';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    MainPageComponent,
    PhoneComponent,
    PhoneDetailsComponent
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    PhoneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
