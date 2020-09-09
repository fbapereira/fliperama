import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Category } from 'src/app/category/category.service';

import { LateralMenuComponent } from './lateral-menu.component';

describe('LateralMenuComponent', () => {
  let component: LateralMenuComponent;
  let fixture: ComponentFixture<LateralMenuComponent>;
  const category = { id: '1' } as Category;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ LateralMenuComponent ],
      providers: [
        {
          provide: Router,
          useValue: {
            navigate: () => {},
          },
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LateralMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('navigateTo', () => {
    describe("when show state", () => {
      beforeEach(() => {
        component.state = 'show';
      });

      it('should change to show state', () => {
        component.navigateTo(category);
        expect(component.state).toBe('hide');
      });

      it('should navigate',  inject([Router], (router: Router) => {
        spyOn(router, 'navigate');
        component.navigateTo(category);
        expect(router.navigate).toHaveBeenCalled()
      }));
    });

    describe("when hide state", () => {
      beforeEach(() => {
        component.state = 'hide';
      });

      it('should change to show state', () => {
        component.navigateTo(category);
        expect(component.state).toBe('show');
      });

      it('should not navigate',  inject([Router], (router: Router) => {
        spyOn(router, 'navigate');
        component.navigateTo(category);
        expect(router.navigate).not.toHaveBeenCalled()
      }));
    });
  });
});
