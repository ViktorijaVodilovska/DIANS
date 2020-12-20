import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoodModel } from 'src/app/models/tuneIn.model';
import { TuneInService } from 'src/app/services/tunein.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css'],
})
export class HeaderMenuComponent implements OnInit {
  show = false;

  input = {} as MoodModel;
  link: string;

  constructor(private router: Router, private tuneInService: TuneInService) {}

  getPlaylist(name) {
    this.input.mood_name = name;

    this.tuneInService.getPlaylistForMood(this.input).subscribe((res) => {
      this.link = res[0].link;
      this.tuneInService.setLink(this.link);
    });
  }

  ngOnInit(): void {}
}
