import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoodModel, WeatherModel } from 'src/app/models/tuneIn.model';
import { TuneInService } from 'src/app/services/tunein.service';
import { Output, EventEmitter } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

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
  path: string;
  constructor(
    private router: Router,
    private tuneInService: TuneInService,
    private snackBar: MatSnackBar
  ) {
    this.getLocation = this.getLocation.bind(this);
    this.getWeatherPlaylist = this.getWeatherPlaylist.bind(this);
  }

  getPlaylist(name) {
    this.path = '';
    this.input.mood_name = name;
    if (name == 'feel good') {
      this.path = '../../../../assets/Icons/feel good.png';
    }
    if (name == 'festive') {
      this.path = '../../../../assets/Icons/festive.png';
    }
    if (name == 'happy') {
      this.path = '../../../../assets/Icons/happy.png';
    }
    if (name == 'moody') {
      this.path = '../../../../assets/Icons/moody.png';
    }
    if (name == 'productive') {
      this.path = '../../../../assets/Icons/productive.png';
    }
    if (name == 'relaxed') {
      this.path = '../../../../assets/Icons/relaxed.png';
    }
    if (name == 'sad') {
      this.path = '../../../../assets/Icons/sad.png';
    }

    this.tuneInService.getPlaylistForMood(this.input).subscribe((res) => {
      this.linkChanged(res[0]);
    });
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getWeatherPlaylist);
    } else {
      console.log('nema');
    }
  }

  getWeatherPlaylist(position) {
    this.weatherModel.latitude = position.coords.latitude;
    this.weatherModel.longitude = position.coords.longitude;

    this.tuneInService
      .getPlaylistForWeather(this.weatherModel)
      .subscribe((res) => {
        if (res) {
          var rand = Math.floor(Math.random() * 3);
          this.linkChanged(res[rand]);
        } else {
          this.snackBar.open(
            'Sorry, we could not find your local weather forecast.',
            'Close',
            {
              duration: 10000,
              horizontalPosition: 'right',
              verticalPosition: 'bottom',
            }
          );
        }
      });
  }

  linkChanged(linkResult) {
    this.link = linkResult.link;
    this.linkChange.emit(this.link);
  }

  ngOnInit(): void {
    this.path = '../../../../assets/Icons/happy.png';
  }
}
