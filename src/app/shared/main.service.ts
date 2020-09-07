import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { data } from './main.data';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  data$ = of(data);
}
