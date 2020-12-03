import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapBackgroundComponent } from './components/map/map-background/map-background.component';
import { HeaderMenuComponent } from './components/header/header-menu/header-menu.component';
<<<<<<< HEAD
@NgModule({
  declarations: [AppComponent, MapBackgroundComponent, HeaderMenuComponent],
  imports: [BrowserModule, AppRoutingModule],
=======
import { PlaylistContainerComponent } from './components/playlist/playlist-container/playlist-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MapBackgroundComponent,
    PlaylistContainerComponent,
    HeaderMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
>>>>>>> ba994ba47ef2b8304162800c4ea6f2b5c0f619e2
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
