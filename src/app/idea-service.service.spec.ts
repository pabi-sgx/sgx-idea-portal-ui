import { TestBed } from '@angular/core/testing';

import { IdeaServiceService } from './idea-service.service';

describe('IdeaServiceService', () => {
  let service: IdeaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdeaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
