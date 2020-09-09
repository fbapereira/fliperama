import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { of, Observable } from 'rxjs';
import { GamesService, Game } from 'src/app/game/games.service';

import { CategoryService, Category } from '../category.service';

import { CategoryListComponent } from './category-list.component';

describe('CategoryListComponent', () => {
  let component: CategoryListComponent;
  let fixture: ComponentFixture<CategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ CategoryListComponent ],
      providers: [
        {
          provide: GamesService,
          useValue: {
            getGamesByCategory: () => of([]),
          },
        },
        {
          provide: CategoryService,
          useValue: {
            getCategory: () => of(),
          },
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnChanges', () => {
    it('should push one observable for each category', () => {
      let data = ['21', '51'];
      component.showCategories = data;

      component.ngOnChanges();

      expect(component.showCategories.length).toBe(data.length);
    });

    it('should call getCategory with the correct ids', inject([CategoryService], (categoryService: CategoryService) => {
      spyOn(categoryService, 'getCategory').and.returnValue(of());
      let data = ['21', '51'];
      component.showCategories = data;

      component.ngOnChanges();
      component.lobbyData.forEach((stream: Observable<any>) => {
        stream.subscribe(() => {})
      })

      data.forEach((id) => expect(categoryService.getCategory).toHaveBeenCalledWith(id));
    }));

    it('should call getGame with the right ids',
      inject([CategoryService, GamesService], (categoryService: CategoryService, gamesService: GamesService) => {
        spyOn(categoryService, 'getCategory').and.callFake((id) => of({ id } as Category));
        spyOn(gamesService, 'getGamesByCategory').and.returnValue(of());

        let data = ['21', '51'];
        component.showCategories = data;

        component.ngOnChanges();
        component.lobbyData.forEach((stream: Observable<any>) => {
          stream.subscribe(() => {})
        })

        data.forEach((id) => expect(gamesService.getGamesByCategory).toHaveBeenCalledWith({ id } as Category));
    }));

    it('should return games and category',
      inject([CategoryService, GamesService], (categoryService: CategoryService, gamesService: GamesService) => {
        let category = { id: '21' } as Category;
        let games = [
          { id: '1' } as Game,
          { id: '2' } as Game,
          { id: '3' } as Game,
          { id: '4' } as Game,
          { id: '5' } as Game,
        ];
        spyOn(categoryService, 'getCategory').and.returnValue(of(category));
        spyOn(gamesService, 'getGamesByCategory').and.returnValue(of(games));

        let data = ['21'];
        component.showCategories = data;

        let result;
        component.ngOnChanges();
        component.lobbyData.forEach((stream: Observable<any>) => {
          stream.subscribe((res) => result = res);
        })
        expect(result).toEqual({ category, games });
    }));

    it('should return a limited number of games',
      inject([CategoryService, GamesService], (categoryService: CategoryService, gamesService: GamesService) => {
        let category = { id: '21' } as Category;
        let games = [
          { id: '1' } as Game,
          { id: '2' } as Game,
          { id: '3' } as Game,
          { id: '4' } as Game,
          { id: '5' } as Game,
        ];
        spyOn(categoryService, 'getCategory').and.returnValue(of(category));
        spyOn(gamesService, 'getGamesByCategory').and.returnValue(of(games));

        let data = ['21'];
        component.showCategories = data;
        component.limit = 3;

        let result;
        component.ngOnChanges();
        component.lobbyData.forEach((stream: Observable<any>) => {
          stream.subscribe((res) => result = res);
        });
        expect(result.games.length).toBe(3);
    }));
  });
});
