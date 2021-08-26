import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {EditComponent} from './edit/edit.component';
import {NavigationComponent} from './navigation/navigation.component';
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [AppComponent, ListComponent, EditComponent, NavigationComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
