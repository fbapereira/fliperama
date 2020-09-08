import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  id$ = this.activatedRoute.queryParams.pipe(
    map((params) => [params['category']])
  );

  constructor(private activatedRoute: ActivatedRoute) {}


}
