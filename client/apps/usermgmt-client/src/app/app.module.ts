import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {EditComponent} from './edit/edit.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {DeleteModalComponent} from './delete-modal/delete-modal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModalModule} from "ngx-bootstrap/modal";
import {FormsModule} from "@angular/forms";
import {ToastComponent} from './toast/toast.component';

@NgModule({
  declarations: [AppComponent, ListComponent, EditComponent, DeleteModalComponent, ToastComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
