import { Component, OnInit } from '@angular/core';
import {UserModel} from "../model/User";
import {ActivatedRoute} from "@angular/router";
import {UserMgmtService} from "../service/user-mgmt.service";

@Component({
  selector: 'client-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  model: UserModel = new UserModel();

  constructor(private route: ActivatedRoute,
              private userMgmtService: UserMgmtService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.userMgmtService.get(id)
        .subscribe(result => {
          this.model = result;
        });
    }
  }

}
