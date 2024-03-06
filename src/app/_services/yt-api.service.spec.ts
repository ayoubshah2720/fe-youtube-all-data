import { TestBed } from '@angular/core/testing';

import { YtApiService } from './yt-api.service';

describe('YtApiService', () => {
  let service: YtApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YtApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
