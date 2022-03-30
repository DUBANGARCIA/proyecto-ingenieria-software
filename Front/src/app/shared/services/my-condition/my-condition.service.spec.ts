import { TestBed } from '@angular/core/testing';

import { MyConditionService } from './my-condition.service';

describe('MyConditionService', () => {
  let service: MyConditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyConditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
