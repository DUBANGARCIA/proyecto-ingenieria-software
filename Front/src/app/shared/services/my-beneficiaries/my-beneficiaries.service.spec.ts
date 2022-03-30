import { TestBed } from '@angular/core/testing';

import { MyBeneficiariesService } from './my-beneficiaries.service';

describe('MyBeneficiariesService', () => {
  let service: MyBeneficiariesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyBeneficiariesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
