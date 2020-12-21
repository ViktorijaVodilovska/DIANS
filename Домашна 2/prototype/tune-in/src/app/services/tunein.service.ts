import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  CountryModel,
  MoodModel,
  OutputPlaylistModel,
  WeatherModel,
} from '../models/tuneIn.model';
import { PlaylistContainerComponent } from '../components/playlist/playlist-container/playlist-container.component';

@Injectable()
export class TuneInService {
  private apiUrl = 'https://heroku-tunein.herokuapp.com/';

  link: string;
  name: string;

  constructor(
    private http: HttpClient,
    private playlist: PlaylistContainerComponent
  ) {}

  getPlaylistForCountry(input: CountryModel): Observable<OutputPlaylistModel> {
    return this.http.post<OutputPlaylistModel>(this.apiUrl + 'country', input);
  }

  getPlaylistForMood(input: MoodModel): Observable<OutputPlaylistModel> {
    return this.http.post<OutputPlaylistModel>(this.apiUrl + 'mood', input);
  }

  getPlaylistForWeather(input: WeatherModel): Observable<OutputPlaylistModel> {
    return this.http.post<OutputPlaylistModel>(this.apiUrl + 'weather', input);
  }
}
