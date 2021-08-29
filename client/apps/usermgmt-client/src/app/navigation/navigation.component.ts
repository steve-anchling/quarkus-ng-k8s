import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'client-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  @ViewChild('offcanvas') offcanvas: any;

  toggle() {
    this.offcanvas.nativeElement.classList.toggle('open');
  }

}
