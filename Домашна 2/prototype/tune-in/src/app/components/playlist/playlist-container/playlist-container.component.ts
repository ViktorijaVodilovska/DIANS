import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { HeaderMenuComponent } from '../../header/header-menu/header-menu.component';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from '@angular/platform-browser';
import { TuneInService } from 'src/app/services/tunein.service';

@Component({
  selector: 'app-playlist-container',
  templateUrl: './playlist-container.component.html',
  styleUrls: ['./playlist-container.component.scss'],
})
export class PlaylistContainerComponent implements OnInit {
  showPlaylist = false;
  url: SafeResourceUrl;

  constructor(private dom: DomSanitizer) {}

  ngOnInit(): void {}

  updatePlaylist(link) {
    console.log(link);
    var NotCleanUrl = 'https://open.spotify.com/embed/playlist/' + link;
    this.url = this.dom.bypassSecurityTrustResourceUrl(NotCleanUrl);
  }
}
