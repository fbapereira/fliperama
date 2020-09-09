import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Category } from '../category/category.service';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('changeSelectedCategories', () => {
    it('should add category when it does not exist', () => {
      let targetCategory = { id: "2" } as Category;
      component.selectedCategories = [ { id: "1" } as Category ];
      component.changeSelectedCategories(targetCategory);
      expect(component.selectedCategories).toContain(targetCategory);
    });

    it('should remove category when it does exist', () => {
      let targetCategory = { id: "2" } as Category;
      component.selectedCategories = [targetCategory];
      component.changeSelectedCategories(targetCategory);
      expect(component.selectedCategories).not.toContain(targetCategory);
    });

    it('should emit when categories change', () => {
      let targetCategory = { id: "2" } as Category;
      component.changeSelectedCategories(targetCategory);
      let result;
      component.selectedCategoriesChanged.subscribe((res) => result = res);
      expect(result).toEqual([targetCategory]);
    });
  });
});
