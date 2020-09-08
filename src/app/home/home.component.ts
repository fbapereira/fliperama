import { Component } from '@angular/core';

import { GamesService } from './../shared/games.service'
import { Category } from '../shared/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private gamesService: GamesService) {
    gamesService.getGamesByCategory({id: '51'} as Category).subscribe((a)=> console.log(a));

  }

 }
