/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DestinyService } from './destiny.service';

describe('Service: Destiny', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DestinyService]
    });
  });

  it('should ...', inject([DestinyService], (service: DestinyService) => {
    expect(service).toBeTruthy();
  }));
});
