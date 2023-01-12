import { TestBed } from '@angular/core/testing';

import { CarToolStoreService } from './car-tool-store.service';

describe('CarToolStoreService', () => {
  let service: CarToolStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarToolStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
