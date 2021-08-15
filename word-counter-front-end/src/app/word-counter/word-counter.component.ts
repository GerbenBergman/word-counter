import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WordCounterGameService } from './word-counter-game.service';

@Component({
  selector: 'app-word-counter',
  templateUrl: './word-counter.component.html'
})
export class WordCounterComponent implements OnInit, OnDestroy {
  gameStarted: boolean = false;
  gameFinished: boolean = false;
  subscriptions: Subscription[] = [];

  constructor(private wordCounterGameService: WordCounterGameService) {
  }

  ngOnInit(): void {
    this.subscriptions.push(this.wordCounterGameService.getGameStarted().subscribe((gameStarted: boolean) => {
      this.gameStarted = gameStarted;
    }));

    this.subscriptions.push(this.wordCounterGameService.getGameFinished().subscribe((gameFinished: boolean) => {
      this.gameFinished = gameFinished;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
