import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ChartConfigurationComponent } from './components/chart-configuration/chart-configuration.component';
import {
  DxButtonModule,
  DxDropDownBoxModule,
  DxPopupModule,
  DxSelectBoxModule,
  DxTextBoxModule
} from "devextreme-angular";
import { ConfiguratorComponent } from './components/configurator/configurator.component';
import { MapComponent } from './components/map/map.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import {RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../app-routing.module";
import {AuthInterceptor} from "./providers/auth.interceptor";
import { DashboardDataCardComponent } from './components/dashboard-data-card/dashboard-data-card.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChartConfigurationComponent,
    ConfiguratorComponent,
    MapComponent,
    HomePageComponent,
    DashboardDataCardComponent,
    DashboardPageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DxTextBoxModule,
    DxButtonModule,
    DxPopupModule,
    DxDropDownBoxModule,
    DxSelectBoxModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
