import { TestBed, inject } from '@angular/core/testing';

import { MaterialTableService } from './material-table.service';

describe('MaterialTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaterialTableService]
    });
  });

  it('should be created', inject([MaterialTableService], (service: MaterialTableService) => {
    expect(service).toBeTruthy();
  }));
});
