import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GameModule } from '../game/game.module';

import { SearchComponent } from './search.component';

@NgModule({
  declarations: [ SearchComponent ],
  exports: [ SearchComponent ],
  imports: [
    CommonModule,
    RouterModule,
    GameModule,
  ]
})
export class SearchModule {}
