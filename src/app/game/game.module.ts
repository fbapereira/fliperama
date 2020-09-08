import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { GameLobbyComponent } from './game-lobby/game-lobby.component';
import { GameThumbComponent } from './game-thumb/game-thumb.component';
import { GameComponent } from './game.component';
import { GamesService } from './games.service';

@NgModule({
  declarations: [
    GameThumbComponent,
    GameLobbyComponent,
    GameComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  exports: [
    GameThumbComponent,
    GameLobbyComponent,
  ],
  providers: [ GamesService ]
})
export class GameModule { }
