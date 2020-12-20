export interface CountryModel {
  country_name: string;
}

export interface WeatherModel {
  latitude: number;
  longitude: number;
}

export interface MoodModel {
  mood_name: string;
}

export interface PlaylistModel {
  name: string;
  link: string;
}

export interface OutputPlaylistModel {
  Playlists: PlaylistModel[];
}
