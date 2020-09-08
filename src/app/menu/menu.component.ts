import { Component, ViewChild } from '@angular/core';

import { CategoryService } from '../category/category.service';

import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
 /**
   * lateral menu
   */
  @ViewChild('lateralMenu') lateralMenu: LateralMenuComponent;

  categories$ = this.categoryService.categories$;

  constructor(
    private categoryService: CategoryService
  ) { }

  /**

   * change the menu's status OPEN/CLOSE
   */
  changeLateralMenuStatus(): void {
    this.lateralMenu.changeMenuStatus();
  }
}
