import { Component, AfterViewInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import * as L from 'leaflet';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-map-background',
  templateUrl: './map-background.component.html',
  styleUrls: ['./map-background.component.scss'],
})

export class MapBackgroundComponent implements AfterViewInit {
  private map;
  private myMarker = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      // specify the path here
      iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png",
    })
  };

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  //create map function
  private initMap(): void {
    var marker;
    this.map = L.map('map', {
      center: [44.7866, 44.7866],
      zoom: 2.5,
      minZoom: 2.5,
      maxZoom: 4,
      maxBoundsViscosity: 1.0,
    });
    //remove zoom control buttons from map
    this.map.zoomControl.remove();
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

    this.map.on("click", e => {
      console.log(e.latlng);
      if (marker) { // check
        this.map.removeLayer(marker);
      }
      marker = L.marker([e.latlng.lat, e.latlng.lng], this.myMarker).addTo(this.map);
    });
  }
}
