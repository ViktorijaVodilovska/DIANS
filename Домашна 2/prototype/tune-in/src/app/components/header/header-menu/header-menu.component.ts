import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MoodModel, WeatherModel} from 'src/app/models/tuneIn.model';
import { TuneInService } from 'src/app/services/tunein.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css'],
})
export class HeaderMenuComponent implements OnInit {
  @Output() linkChange = new EventEmitter();
  show = false;
  weatherModel = {} as WeatherModel;
  input = {} as MoodModel;

  link: string;

  constructor(private router: Router, private tuneInService: TuneInService) {
    this.getLocation = this.getLocation.bind(this);
    this.getWeatherPlaylist = this.getWeatherPlaylist.bind(this);
  }

  getPlaylist(name) {
    this.input.mood_name = name;

    this.tuneInService.getPlaylistForMood(this.input).subscribe((res) => {
      this.linkChanged(res[0]);
    });
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getWeatherPlaylist);
    } else {
      console.log("nema");
    }
  }

  getWeatherPlaylist(position) {
    console.log("lat "+ position.coords.latitude);
    console.log("lon "+ position.coords.longitude);
    this.weatherModel.latitude = position.coords.latitude;
    this.weatherModel.longitude = position.coords.longitude;


    this.tuneInService.getPlaylistForWeather(this.weatherModel).subscribe((res) => {
      console.log(res[0]);
      this.linkChanged(res[0]);
    });
  }

  linkChanged(linkResult){
    this.link = linkResult.link;
    this.linkChange.emit(this.link)
  }

  ngOnInit(): void {}
}
