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

export interface MapModel {
  adminCode1: string;
  adminName1: string;
  codes: any;
  countryCode: string;
  countryName: string;
  distance: number;
}
