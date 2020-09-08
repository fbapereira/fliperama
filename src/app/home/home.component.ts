import { Component } from '@angular/core';

import { Category } from '../shared/category.service';
import { GamesService, Game } from '../game/games.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  games$: Observable<Game[]> = this.gamesService.getGamesByCategory({id: '51'} as Category).pipe(
    map((a: Game[]) => a.slice(0, 4))
  );

  constructor(private gamesService: GamesService) {
  }
 }
