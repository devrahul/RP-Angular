import { TestBed, inject } from '@angular/core/testing';

import { RandomUserService } from './random-user.service';

describe('RandomUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomUserService]
    });
  });

  it('should ...', inject([RandomUserService], (service: RandomUserService) => {
    expect(service).toBeTruthy();
  }));
});
