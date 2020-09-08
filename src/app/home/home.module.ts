import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { GameModule } from '../game/game.module';
import { CategoryModule } from '../category/category.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    GameModule,
    CategoryModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
