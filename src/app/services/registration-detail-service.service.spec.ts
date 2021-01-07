import { TestBed } from '@angular/core/testing';

import { RegistrationDetailServiceService } from './registration-detail-service.service';

describe('RegistrationDetailServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrationDetailServiceService = TestBed.get(RegistrationDetailServiceService);
    expect(service).toBeTruthy();
  });
});
