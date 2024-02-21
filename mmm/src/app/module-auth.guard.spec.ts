import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { moduleAuthGuard } from './module-auth.guard';

describe('moduleAuthGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => moduleAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
