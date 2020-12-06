import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapBackgroundComponent } from './components/map/map-background/map-background.component';
import { HeaderMenuComponent } from './components/header/header-menu/header-menu.component';
import { PlaylistContainerComponent } from './components/playlist/playlist-container/playlist-container.component';
import { AboutUsComponent } from './components/about/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    MapBackgroundComponent,
    HeaderMenuComponent,
    PlaylistContainerComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
