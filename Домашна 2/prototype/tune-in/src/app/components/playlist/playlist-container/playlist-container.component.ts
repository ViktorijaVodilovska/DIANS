import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-playlist-container',
  templateUrl: './playlist-container.component.html',
  styleUrls: ['./playlist-container.component.scss'],
})
export class PlaylistContainerComponent implements OnInit {
  @Output() toggleShowPlaylist = new EventEmitter();
  @Input() link:string
  @Input() showPlaylist:boolean;

  constructor() {}

  ngOnInit(): void {}

  showPlaylistChange(){
    this.toggleShowPlaylist.emit(!this.showPlaylist)
  }
}
