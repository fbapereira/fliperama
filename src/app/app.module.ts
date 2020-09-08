import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { HomeModule } from './home/home.module';
import {SharedModule } from './shared/shared.module';
import {GameModule} from './game/game.module'
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    MenuModule,
    HomeModule,
    GameModule,
    SearchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
