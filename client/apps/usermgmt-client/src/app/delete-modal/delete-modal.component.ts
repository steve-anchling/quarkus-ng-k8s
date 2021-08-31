import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'client-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

  @Input("id")
  id: string;

  constructor() { }

  ngOnInit(): void {
  }

}
