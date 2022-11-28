import { TestBed } from '@angular/core/testing';

import { ServiciospiService } from './serviciospi.service';

describe('ServiciospiService', () => {
  let service: ServiciospiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciospiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
