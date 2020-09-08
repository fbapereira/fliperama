import { Component, Input, OnChanges } from '@angular/core';
import { switchMap, map } from 'rxjs/operators';
import { GamesService, Game } from 'src/app/game/games.service';

import { CategoryService, Category } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnChanges {
  @Input()
  showCategories: string[];

  @Input()
  limit: number = 0;

  lobbyData = [];

  constructor(private gamesService: GamesService, private categoryService: CategoryService) { }

  ngOnChanges() {
    this.lobbyData = [];
    this.showCategories.forEach((categoryId: string) => {
      this.lobbyData.push(
        this.categoryService.getCategory(categoryId).pipe(
          switchMap((category: Category) => {
            return this.gamesService.getGamesByCategory(category).pipe(
              map((game: Game[]) => {
                return { category, games: this.limit === 0 ? game : game.slice(0, this.limit) };
              }),
            )
          }),
      ));
    });
  }
}
