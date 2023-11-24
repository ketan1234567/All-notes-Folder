import { TestBed } from '@angular/core/testing';

import { AuthOldGuard } from './auth-old.guard';

describe('AuthOldGuard', () => {
  let guard: AuthOldGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthOldGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
