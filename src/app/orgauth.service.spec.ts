import { TestBed } from '@angular/core/testing';

import { OrgauthService } from './orgauth.service';

describe('OrgauthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrgauthService = TestBed.get(OrgauthService);
    expect(service).toBeTruthy();
  });
});
