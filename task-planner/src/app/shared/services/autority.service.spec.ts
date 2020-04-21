import { TestBed } from '@angular/core/testing';

import { AutorityService } from './autority.service';

describe('AutorityService', () => {
  let service: AutorityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutorityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
