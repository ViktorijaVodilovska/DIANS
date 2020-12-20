import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoodModel } from 'src/app/models/tuneIn.model';
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

  input = {} as MoodModel;
  link: string;

  constructor(private router: Router, private tuneInService: TuneInService) {}

  getPlaylist(name) {
    this.input.mood_name = name;

    this.tuneInService.getPlaylistForMood(this.input).subscribe((res) => {
      this.link = res[0].link;
      this.linkChanged();
    });
  }

  linkChanged(){
    this.linkChange.emit(this.link)
  }

  ngOnInit(): void {}
}
