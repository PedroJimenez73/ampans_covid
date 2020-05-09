import { TestBed } from '@angular/core/testing';

import { PantallasService } from './pantallas.service';

describe('PantallasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PantallasService = TestBed.get(PantallasService);
    expect(service).toBeTruthy();
  });
});
