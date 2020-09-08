import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { CategoryListComponent } from './category-list.component';

fdescribe('CategoryListComponent', () => {
  let component: CategoryListComponent;
  let fixture: ComponentFixture<CategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryListComponent ]
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
    it('should push one observable for each category', fakeAsync(() => {
      let data = ['21', '51'];
      component.lobbyData = data;

      component.ngOnChanges();
      tick(100);

      expect(component.showCategories.length).toBe(data.length);
    }));

    it('should call getCategory with the right ids', () => {

    });

    it('should call getGame  with the right ids', () => {

    });
  });
});
