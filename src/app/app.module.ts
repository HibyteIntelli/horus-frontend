import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {ChartConfigurationComponent} from './components/chart-configuration/chart-configuration.component';
import {
  DxBarGaugeModule,
  DxButtonModule, DxChartModule, DxCircularGaugeModule,
  DxDropDownBoxModule,
  DxPopupModule,
  DxSelectBoxModule,
  DxTextBoxModule
} from "devextreme-angular";
import {ConfiguratorComponent} from './components/configurator/configurator.component';
import {MapComponent} from './components/map/map.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../app-routing.module";
import {AuthInterceptor} from "./providers/auth.interceptor";
import {DashboardDataCardComponent} from './components/dashboard-data-card/dashboard-data-card.component';
import {DashboardPageComponent} from './components/dashboard-page/dashboard-page.component';
import {DxiItemModule, DxiSeriesModule} from "devextreme-angular/ui/nested";
import {LineSeriesComponent} from './components/charts/line-series/line-series.component';
import {RangeSeriesComponent} from './components/charts/range-series/range-series.component';
import {CircularGaugeComponent} from './components/charts/circular-gauge/circular-gauge.component';
import {BarGaugeComponent} from './components/charts/bar-gauge/bar-gauge.component';
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChartConfigurationComponent,
    ConfiguratorComponent,
    MapComponent,
    HomePageComponent,
    DashboardDataCardComponent,
    DashboardPageComponent,
    LineSeriesComponent,
    RangeSeriesComponent,
    CircularGaugeComponent,
    BarGaugeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DxTextBoxModule,
    DxButtonModule,
    DxPopupModule,
    DxDropDownBoxModule,
    DxSelectBoxModule,
    HttpClientModule,
    DxiItemModule,
    DxBarGaugeModule,
    DxCircularGaugeModule,
    DxChartModule,
    DxiSeriesModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
