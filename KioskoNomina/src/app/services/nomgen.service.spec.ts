import { TestBed } from '@angular/core/testing';

import { NomgenService } from './nomgen.service';

describe('NomgenService', () => {
  let service: NomgenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomgenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
