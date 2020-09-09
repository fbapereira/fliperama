import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { GamesService, Game } from './games.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  game$: Observable<Game> = this.activatedRoute.queryParams.pipe(
    map((params) => params['game']),
    switchMap((gameId: string) => {
      return this.gameService.games$.pipe(
        map((games: Game[]) => games.find((game: Game) => game.id === gameId)),
      );
    }),
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private gameService: GamesService
  ) { }
}
