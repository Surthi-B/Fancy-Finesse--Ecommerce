import { TestBed } from '@angular/core/testing';

import { FancyService } from './fancy.service';

describe('FancyService', () => {
  let service: FancyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FancyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
