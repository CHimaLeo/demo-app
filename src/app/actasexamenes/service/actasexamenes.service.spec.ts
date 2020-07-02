import { TestBed } from '@angular/core/testing';

import { ActasexamenesService } from './actasexamenes.service';

describe('ActasexamenesService', () => {
  let service: ActasexamenesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActasexamenesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
