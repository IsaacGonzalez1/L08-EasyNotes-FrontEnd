import { TestBed } from '@angular/core/testing';

import { CollectionNoteService } from './collection-note.service';

describe('CollectionNoteService', () => {
  let service: CollectionNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
