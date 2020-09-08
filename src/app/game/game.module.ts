import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameThumbComponent } from './game-thumb/game-thumb.component';
import { GameLobbyComponent } from './game-lobby/game-lobby.component';
import { GamesService } from './games.service';
import { SharedModule } from '../shared/shared.module';



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
