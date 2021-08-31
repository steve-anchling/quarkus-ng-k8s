import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Toast} from "bootstrap";
import {NotificationService} from "../service/notification.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'client-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  sub: Subscription;

  @ViewChild('notificationToast', {static: true}) toastEl: ElementRef
  toast: any

  text: string;

  constructor(public notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.clearMessage();
    this.toast = new Toast(this.toastEl.nativeElement, {})
    this.sub = this.notificationService.messageChange.subscribe((value) => {
      this.text = value;
      console.log('show');
      this.toast.show();
    });
  }

  isClosed() {
    return !this.toastEl.nativeElement.classList.contains('show')
  }

  show() {
    this.toast.show();
  }

}
