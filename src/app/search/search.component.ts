import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { combineLatest, fromEvent, Observable, BehaviorSubject } from 'rxjs';
import { map, startWith, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { CategoryService, Category } from '../category/category.service';
import { GamesService, Game } from '../game/games.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit {

  @ViewChild('searchInput')
  input: ElementRef;

  searchText$: Observable<any>;
  games$: Observable<Game[]>

  public selectedCategoriesChanged = new BehaviorSubject<string[]>([]);

  categories$ = this.categoryService.categories$;
  selectedCategories = [];


    constructor(private gamesService: GamesService, private categoryService: CategoryService) { }
  ngAfterViewInit(): void {
  
    this.searchText$ = fromEvent<any>(this.input.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        map(event => event.toUpperCase()),
        startWith(''),
        debounceTime(400),
        distinctUntilChanged(),
      );

    this.games$ = combineLatest([
        this.selectedCategoriesChanged,
        this.gamesService.games$,
        this.searchText$
      ]).pipe(
        map(([selectedCategories, games, searchText]) => {
          debugger;
          let selectedGames = games;

          if (!!searchText) {
            selectedGames = selectedGames.filter((game: Game) => (game.name.toUpperCase().indexOf(searchText) > -1));
          }

          // if (selectedCategories.length > 0) {
          //   selectedGames = selectedGames.filter((game: Game) => game.categories.forEach((category) => {
          //     let a = selectedCategories.indexOf((selectedCategories) => selectedCategories.id === category) > -1;
          //      return a;
          //   }));
          // }

          return selectedGames;
        }),
    
          // return  games.filter((x) => categories.length === 0 || categories.includes(x.categories[0]))
      );
  }

  select(category: Category) {
    if (this.selectedCategories.includes(category)) {
      this.selectedCategories = this.selectedCategories.filter((selectedCategory) => selectedCategory !== category);
    } else {
      this.selectedCategories.push(category);
    }
    this.selectedCategoriesChanged.next(this.selectedCategories);
  }
}
