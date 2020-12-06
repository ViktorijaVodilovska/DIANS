import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about/about-us/about-us.component';

import { MapBackgroundComponent } from './components/map/map-background/map-background.component';

const routes: Routes = [
  { path: '', component: MapBackgroundComponent },
  { path: 'about', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
