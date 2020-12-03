import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapBackgroundComponent } from './components/map/map-background/map-background.component';
import { HeaderMenuComponent } from './components/header/header-menu/header-menu.component';
@NgModule({
  declarations: [AppComponent, MapBackgroundComponent, HeaderMenuComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
``;
