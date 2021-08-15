import { TestBed } from '@angular/core/testing';

import { WordCounterGameService } from './word-counter-game.service';

describe('WordCounterGameService', () => {
  let service: WordCounterGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordCounterGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
