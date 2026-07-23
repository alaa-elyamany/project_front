import { TestBed } from '@angular/core/testing';

import { OrdeService } from './orde-service';

describe('OrdeService', () => {
  let service: OrdeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
