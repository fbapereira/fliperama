import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CategoryModule } from '../category/category.module';
import { GameModule } from '../game/game.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    GameModule,
    CategoryModule,
  ],
  exports: [ HomeComponent ]
})
export class HomeModule { }
