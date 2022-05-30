import { TestBed } from '@angular/core/testing';

import { Base.ServiceService } from './base.service.service';

describe('Base.ServiceService', () => {
  let service: Base.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Base.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
