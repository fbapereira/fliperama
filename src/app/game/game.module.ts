import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { GameLobbyComponent } from './game-lobby/game-lobby.component';
import { GameThumbComponent } from './game-thumb/game-thumb.component';
import { GamesService } from './games.service';

@NgModule({
  declarations: [GameThumbComponent, GameLobbyComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [GameThumbComponent, GameLobbyComponent],
  providers: [GamesService]
})
export class GameModule { }
