import { TestBed } from "@angular/core/testing";

import { OrgAuthService } from "./org-guard.service";

describe("OrgAuthService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: OrgAuthService = TestBed.get(OrgAuthService);
    expect(service).toBeTruthy();
  });
});
