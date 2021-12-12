import { TestBed } from '@angular/core/testing';

import { BlogviewService } from './blogview.service';

describe('BlogviewService', () => {
  let service: BlogviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
