import { Component, AfterViewInit } from '@angular/core';
import { from } from 'rxjs';
import * as L from 'leaflet';
@Component({
  selector: 'app-map-background',
  templateUrl: './map-background.component.html',
  styleUrls: ['./map-background.component.scss'],
})
export class MapBackgroundComponent implements AfterViewInit {
  private map;
  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  //create map function
  private initMap(): void {
    this.map = L.map('map', {
      center: [44.7866, 44.7866],
      zoom: 2.5,
      minZoom: 2.5,
      maxZoom: 4,
      maxBoundsViscosity: 1.0,
    });

    //set map bounds
    var southWest = L.latLng(-89.98155760646617, -180),
      northEast = L.latLng(89.99346179538875, 180);
    var bounds = L.latLngBounds(southWest, northEast);

    this.map.setMaxBounds(bounds);

    //set map tiles
    const tiles = L.tileLayer(
      'https://api.mapbox.com/styles/v1/vikivod/cki6jbjo39mkc19o5ks8pwrkn/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidmlraXZvZCIsImEiOiJja2k2ajg5c3Izdm91MnJwNWN6ZnRucmlqIn0.O-hMgtuuRP_N5asmx6kScg',
      {
        maxZoom: 19,
        attribution:
          '© <a href="https://www.mapbox.com/map-feedback/%22%3EMapbox</a> © <a href="http://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }
}
