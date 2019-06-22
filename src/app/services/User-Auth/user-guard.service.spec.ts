import { TestBed } from "@angular/core/testing";

import { UserAuthService } from "./user-guard.service";

describe("AuthGuardService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: UserAuthService = TestBed.get(UserAuthService);
    expect(service).toBeTruthy();
  });
});
