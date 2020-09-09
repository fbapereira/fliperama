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

  public selectedCategoriesChanged = new BehaviorSubject<Category[]>([]);

  categories$ = this.categoryService.categories$;
  selectedCategories = [];


  constructor(
    private gamesService: GamesService,
    private categoryService: CategoryService
  ) { }

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
          let selectedGames = games;

          if (!!searchText) {
            selectedGames = selectedGames.filter((game: Game) => (game.name.toUpperCase().indexOf(searchText) > -1));
          }

          if (selectedCategories.length > 0) {
            selectedGames = selectedGames.filter((game) => {
              return game.categories.some((gameCategory: string) => {
                return selectedCategories.some((selectedCategory: Category) => {
                  if (gameCategory === selectedCategory.id) return true;
                });
              });
            });
          }
          return selectedGames;
        }),
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
