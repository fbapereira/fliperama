import { Injectable } from '@angular/core';
import { MainService } from '../shared/main.service';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Category } from '../shared/category.service';

export class Game {
  name: string;
  background: string;
  icon_2: string;
}

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private mainService: MainService) { }

  getGamesByCategory(category: Category): Observable<Game[]> {
    return this.mainService.data$.pipe(
      map((game: any[]) => game.filter((x) => x.categories.includes(category.id))),
    );
  }
}
