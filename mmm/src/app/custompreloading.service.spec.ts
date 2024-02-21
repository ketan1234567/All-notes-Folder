import { TestBed } from '@angular/core/testing';

import { CustompreloadingService } from './custompreloading.service';

describe('CustompreloadingService', () => {
  let service: CustompreloadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustompreloadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
