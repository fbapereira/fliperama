import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MainService } from './main.service';

export interface Category {
  id: number,
  title: string,
}

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  categories$: Observable<Category[]> = this.mainService.data$.pipe(
    map((data: any) => {
      data = data.map(({ cats }) => cats);
      data = data.reduce((acc: Category[], value: Category[]) => acc = [...acc, ...value]);
      data = data.filter((value, index, self) => index === self.findIndex((t) => (t.id === value.id)));
      return data;
    }),
  );

  constructor(private mainService: MainService) { }
}
