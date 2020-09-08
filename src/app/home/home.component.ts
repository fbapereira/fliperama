import { Component } from '@angular/core';

import { Category, CategoryService } from '../shared/category.service';
import { GamesService, Game } from '../game/games.service';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showCategories: string[] = ['51', '95', '93'];
  lobbyData = [];

  constructor(private gamesService: GamesService, private categoryService: CategoryService) {

    this.showCategories.forEach((categoryId: string) => {
      this.lobbyData.push(
        this.categoryService.getCategory(categoryId).pipe(
          switchMap((category: Category) => {
            return this.gamesService.getGamesByCategory(category).pipe(
              map((game: Game[]) => {
                return { category, games: game.slice(0, 4) };
              }),
            )
          }),
      ));
    });
  }
 }
