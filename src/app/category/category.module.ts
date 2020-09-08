import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { GameModule } from '../game/game.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { RouterModule } from '@angular/router';

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
