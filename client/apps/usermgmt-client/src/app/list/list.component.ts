import { Component, OnInit } from '@angular/core';
import {UserMgmtService} from "../service/user-mgmt.service";
import {UserModel} from "../model/User";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {DeleteModalComponent} from "../delete-modal/delete-modal.component";

@Component({
  selector: 'client-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users: UserModel[] = [];
  bsModalRef: BsModalRef;

  constructor(private service: UserMgmtService,
              private modalService: BsModalService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  delete(user: UserModel) {
    const initialState = {
      text: 'Do you really want to delete ' + user.lastname + ', ' + user.firstname + '?',
    };

    // @ts-ignore
    this.bsModalRef = this.modalService.show(DeleteModalComponent, {initialState});
    this.bsModalRef.content.event.subscribe(() => {
      this.service.delete(user.id).subscribe(result => {
        this.users = result;
        this.loadUsers();
      });
    });
  }

  private loadUsers() {
    this.service.findAll()
      .subscribe(result => {
        this.users = result;
      });
  }

}
