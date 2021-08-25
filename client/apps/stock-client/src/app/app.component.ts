import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'client-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('offcanvascollapse') offcanvascollapse: any;

  toggle() {
    this.offcanvascollapse.nativeElement.classList.toggle('open');
  }
}
