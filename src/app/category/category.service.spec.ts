import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { dataTest } from '../shared/main.data.test'
import { MainService } from '../shared/main.service';

import { CategoryService } from './category.service';

describe('CategoryService', () => {
  let service: CategoryService;
  let categoriesAvailable = [
    { id: '51', title: 'Video Slots', type: 'category' },
    { id: '93', title: 'Top Slots', type: 'category' },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MainService,
          useValue: {
            data$: of(dataTest),
          }
        }
      ],
    });
    service = TestBed.inject(CategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all categories', () => {
    let result;
    service.categories$.subscribe((res) => result = res);
    expect(result).toEqual(categoriesAvailable);
  });

  it('should return specific category', () => {
    let result;
    let categoryId = '51';
    service.getCategory(categoryId).subscribe((res) => result = res);
    expect(result).toEqual(categoriesAvailable.find((category) => category.id === categoryId));
  });
});
