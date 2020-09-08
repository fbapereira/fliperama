import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Category } from '../category/category.service';
import { MainService } from '../shared/main.service';

export class Game {
  id: string;
  categories: string[];
  name: string;
  background: string;
  icon_2: string;
}

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  games$: Observable<Game[]> = this.mainService.data$.pipe(map((games) => games as Game[]));

  constructor(private mainService: MainService) { }

  getGamesByCategory(category: Category): Observable<Game[]> {
    return this.mainService.data$.pipe(
      map((game: any[]) => game.filter((x) => x.categories.includes(category.id))),
    );
  }
}
