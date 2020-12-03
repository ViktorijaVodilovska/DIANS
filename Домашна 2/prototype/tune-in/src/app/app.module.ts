import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapBackgroundComponent } from './components/map/map-background/map-background.component';
import { HeaderMenuComponent } from './components/header/header-menu/header-menu.component';
import { MoodPopupComponent } from './components/header/mood-list/mood-popup/mood-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxButtonModule, IgxToggleModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MapBackgroundComponent,
    HeaderMenuComponent,
    MoodPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxButtonModule,
    IgxToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
