import { TestBed } from '@angular/core/testing';

import { ScormStoreService } from './scorm-store.service';

describe('ScormStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScormStoreService = TestBed.get(ScormStoreService);
    expect(service).toBeTruthy();
  });
});
