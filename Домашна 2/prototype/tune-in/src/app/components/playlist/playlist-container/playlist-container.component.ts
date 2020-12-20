import { Component, OnInit, SecurityContext } from '@angular/core';
import { HeaderMenuComponent } from '../../header/header-menu/header-menu.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TuneInService } from 'src/app/services/tunein.service';

@Component({
  selector: 'app-playlist-container',
  templateUrl: './playlist-container.component.html',
  styleUrls: ['./playlist-container.component.scss'],
})
export class PlaylistContainerComponent implements OnInit {
  showPlaylist = false;
  url: SafeResourceUrl;
  constructor(
    private header: HeaderMenuComponent,
    private dom: DomSanitizer,
    private tuneInService: TuneInService
  ) {}

  ngOnInit(): void {}

  updatePlaylist() {
    var NotCleanUrl =
      'http://open.spotify.com/embed/playlist/' + this.tuneInService.getLink();
    this.url = this.dom.bypassSecurityTrustResourceUrl(NotCleanUrl);
  }
}
