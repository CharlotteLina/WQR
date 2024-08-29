import { TestBed } from '@angular/core/testing';

import { WqrService } from './wqr.service';

describe('WqrService', () => {
  let service: WqrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WqrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
