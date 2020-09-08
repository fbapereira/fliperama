import { Component, Input } from '@angular/core';

import { Game } from '../games.service';

@Component({
  selector: 'app-game-thumb',
  templateUrl: './game-thumb.component.html',
  styleUrls: ['./game-thumb.component.scss']
})
export class GameThumbComponent {
  @Input() game: Game;
}
