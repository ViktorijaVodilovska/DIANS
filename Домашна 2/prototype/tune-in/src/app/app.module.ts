import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapBackgroundComponent } from './components/map/map-background/map-background.component';
import { HeaderMenuComponent } from './components/header/header-menu/header-menu.component';
import { PlaylistContainerComponent } from './components/playlist/playlist-container/playlist-container.component';
import { AboutUsComponent } from './components/about/about-us/about-us.component';
import { TuneInService } from './services/tunein.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MapBackgroundComponent,
    HeaderMenuComponent,
    PlaylistContainerComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    TuneInService,
    HttpClient,
    HeaderMenuComponent,
    PlaylistContainerComponent,
    MatSnackBar,
    Overlay,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
