import { TestBed, inject } from '@angular/core/testing';

import { EventsListResolverService } from './events-list-resolver.service';

describe('EventsListResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventsListResolverService]
    });
  });

  it('should ...', inject([EventsListResolverService], (service: EventsListResolverService) => {
    expect(service).toBeTruthy();
  }));
});
