import {Component, OnInit} from '@angular/core';
import {UserModel} from "../model/User";
import {ActivatedRoute} from "@angular/router";
import {UsermgmtService} from "../service/usermgmt.service";
import {NotificationService} from "../service/notification.service";

@Component({
  selector: 'client-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  model: UserModel = new UserModel()

  constructor(private route: ActivatedRoute,
              private notificationService: NotificationService,
              private userMgmtService: UsermgmtService) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.userMgmtService.get(id)
        .subscribe(result => {
          this.model = result;
        });
    }
  }

  submit() {
    this.userMgmtService.save(this.model)
      .subscribe(result => {
        this.notificationService.notifySuccess('The user has been saved successfully');
      });
  }
}
