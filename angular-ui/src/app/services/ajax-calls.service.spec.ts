import { TestBed } from '@angular/core/testing';

import { AjaxCallsService } from './ajax-calls.service';

describe('AjaxCallsService', () => {
  let service: AjaxCallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjaxCallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
