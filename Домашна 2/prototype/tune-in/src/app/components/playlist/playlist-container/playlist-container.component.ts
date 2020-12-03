import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-container',
  templateUrl: './playlist-container.component.html',
  styleUrls: ['./playlist-container.component.scss']
})
export class PlaylistContainerComponent implements OnInit {
  showPlaylist = false;

  constructor() { }

  ngOnInit(): void {

  }

  songs = [
    {
      "position": 1,
      "title": "positions",
      "artist": "Ariana Grande",
      "link": 'https://open.spotify.com/track/35mvY5S1H3J2QZyna3TFe0'
    },
    {
      "position": 2,
      "title": "Lemonade (feat. Gunna, Don Toliver & NAV)",
      "artist": "Internet Money",
      "link": "https://open.spotify.com/track/7hxHWCCAIIxFLCzvDgnQHX}"
    },
    {
      "position": 3,
      "title": "Dakiti",
      "artist": "Bad Bunny",
      "link": "https://open.spotify.com/track/47EiUVwUp4C9fGccaPuUCS"
    },
    {
      "position": 4,
      "title": "34+35",
      "artist": "Ariana Grande",
      "link": "https://open.spotify.com/track/6Im9k8u9iIzKMrmV7BWtlF"
    },
    {
      "position": 5,
      "title": "For The Night (feat. Lil Baby & DaBaby)",
      "artist": "Pop Smoke",
      "link": "https://open.spotify.com/track/0PvFJmanyNQMseIFrU708S"
    },
    {
      "position": 6,
      "title": "Mood (feat. iann dior)",
      "artist": "24kGoldn",
      "link": "https://open.spotify.com/track/3tjFYV6RSFtuktYl3ZtYcq"
    },
    {
      "position": 7,
      "title": "WAP (feat. Megan Thee Stallion)",
      "artist": "Cardi B",
      "link": "https://open.spotify.com/track/4Oun2ylbjFKMPTiaSbbCih"
    },
    {
      "position": 8,
      "title": "What You Know Bout Love",
      "artist": "Pop Smoke",
      "link": "https://open.spotify.com/track/1tkg4EHVoqnhR6iFEXb60y"
    },
    {
      "position": 9,
      "title": "pov",
      "artist": "Ariana Grande",
      "link": "https://open.spotify.com/track/3UoULw70kMsiVXxW0L3A33"
    },
    {
      "position": 10,
      "title": "Laugh Now Cry Later (feat. Lil Durk)",
      "artist": "Drake",
      "link": "https://open.spotify.com/track/2SAqBLGA283SUiwJ3xOUVI"
    }
  ];
}
