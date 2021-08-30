import { Component, OnInit } from '@angular/core';
import {UsermgmtService} from "../service/usermgmt.service";
import {UserModel} from "../model/User";

@Component({
  selector: 'client-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users: UserModel[] = [];

  constructor(private service: UsermgmtService) { }

  ngOnInit(): void {
    this.service.findAll()
      .subscribe(result => {
        this.users = result;
      });
  }

}
