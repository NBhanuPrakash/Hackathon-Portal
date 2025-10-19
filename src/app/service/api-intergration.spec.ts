import { TestBed } from '@angular/core/testing';

import { ApiIntergration } from './api-intergration';

describe('ApiIntergration', () => {
  let service: ApiIntergration;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiIntergration);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
