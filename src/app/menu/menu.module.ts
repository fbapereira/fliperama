import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LateralMenuComponent } from './lateral-menu/lateral-menu.component'
import { MenuComponent } from './menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuComponent, LateralMenuComponent],
  exports: [MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class MenuModule { }
