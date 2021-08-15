import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameConfiguration } from '../game-configuration';
import { WordFrequencyAnalyser } from '../../../../../word-counter-library/dist';
import { WordCounterGameService } from '../word-counter-game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html'
})
export class GameResultComponent implements OnInit, OnDestroy {
  private wordFrequencyAnalyser: WordFrequencyAnalyser = new WordFrequencyAnalyser();
  private subscriptions: Subscription[] = [];
  gameResults: string[] = [];
  gameConfigurations: GameConfiguration[] = [];

  constructor(private wordCounterGameService: WordCounterGameService) {
  }

  ngOnInit(): void {
    this.subscriptions.push(this.wordCounterGameService.getGameResults().subscribe((gameResults: string[]) => {
      this.gameResults = gameResults;
    }));
    
    this.subscriptions.push(this.wordCounterGameService.getGameConfigurations().subscribe((gameConfigurations: GameConfiguration[]) => {
      this.gameConfigurations = gameConfigurations
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  getResult(sentence: string, gameConfiguration: GameConfiguration): boolean {
    const numberOfWords = gameConfiguration.getNumberOfWords();

    switch (gameConfiguration.getType()) {
      case 'wordCount':
        return this.wordFrequencyAnalyser.calculateHighestFrequency(sentence) === numberOfWords;
      case 'specificWordCount':
        return this.wordFrequencyAnalyser.calculateFrequencyForWord(sentence, gameConfiguration.getWord() as string) === numberOfWords;
      case 'wordFrequency':
        const secondMostOccuringWord = this.wordFrequencyAnalyser.calculateMostFrequentNWords(sentence, 2)[1];
        return secondMostOccuringWord ? secondMostOccuringWord.getFrequency() === numberOfWords : false;
    }

    return false;
  }

  restartGame(): void {
    this.wordCounterGameService.resetGame();
  }
}
