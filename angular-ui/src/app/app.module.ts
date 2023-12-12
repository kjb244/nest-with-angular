import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { StocksComponent } from './components/stocks/stocks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StocksComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
