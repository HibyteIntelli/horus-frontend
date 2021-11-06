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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChartConfigurationComponent,
    ConfiguratorComponent,
    MapComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    DxTextBoxModule,
    DxButtonModule,
    DxPopupModule,
    DxDropDownBoxModule,
    DxSelectBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
