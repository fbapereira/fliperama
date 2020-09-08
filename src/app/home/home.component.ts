import { Component } from '@angular/core';

import { Category, CategoryService } from '../shared/category.service';
import { GamesService, Game } from '../game/games.service';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { }
