import { Component, OnInit, Input } from '@angular/core';

import { Game } from '../games.service';

@Component({
  selector: 'app-game-lobby',
  templateUrl: './game-lobby.component.html',
  styleUrls: ['./game-lobby.component.scss']
})
export class GameLobbyComponent {
  @Input() games: Game[];
}
