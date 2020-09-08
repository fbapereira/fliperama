import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input } from '@angular/core';

import { Category } from '../../shared/category.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.scss'],
  animations: [
    trigger('animationInOut', [
      state('hide', style({
        'left': '-14.7rem'
      })),
      state('show', style({
        'left': '0px'
      })),
      transition('show <=> hide', animate('300ms ease-in')),
    ]),
  ]
})
export class LateralMenuComponent {
   /**
    * categories to became menu
    */
  @Input()
  categories: Category[];

   /**
   * current status
   */
   state = 'hide';

   constructor(private router: Router) {}
   /**
    * navigate to category
    * @param category target category
    */
   navigateTo(category: Category): void {
     // case menu close, and user click on it, just open the menu without navigate
     if (this.state === 'hide') {
       this.changeMenuStatus();
       return;
     }
 
     if (category) {
       this.router.navigate(['/category'], { queryParams: { category: category.id } });
     } else {
       this.router.navigate(['/']);
     }
     this.changeMenuStatus();
   }

   /**
    * change menu status OPEN/CLOSE
    */
   changeMenuStatus(): void {
     this.state = (this.state === 'show' ? 'hide' : 'show');
   }
}
