import { TestBed } from '@angular/core/testing';

import { ColorToolStoreService } from './color-tool-store.service';

describe('ColorToolStoreService', () => {
  let service: ColorToolStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorToolStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
