import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GameModule } from '../game/game.module';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryComponent } from './category.component';

@NgModule({
  declarations: [CategoryComponent, CategoryListComponent],
  exports: [CategoryComponent, CategoryListComponent],
  imports: [
    CommonModule,
    GameModule,
    RouterModule,
  ]
})
export class CategoryModule { }
