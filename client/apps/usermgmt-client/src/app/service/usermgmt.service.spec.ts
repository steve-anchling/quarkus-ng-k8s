import { TestBed } from '@angular/core/testing';

import { UserMgmtService } from './user-mgmt.service';

describe('UsermgmtService', () => {
  let service: UserMgmtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserMgmtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
