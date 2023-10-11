import { TestBed } from '@angular/core/testing';

import { CustomerCommonService } from './customer-common.service';

describe('CustomerCommonService', () => {
  let service: CustomerCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
