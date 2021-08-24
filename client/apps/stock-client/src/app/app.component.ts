import { Component } from '@angular/core';

@Component({
  selector: 'client-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'stock-client';
  status: boolean = false;
  clickEvent(){
    this.status = !this.status;
  }
}
