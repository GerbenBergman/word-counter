import { Component } from '@angular/core';
import { GameConfiguration } from './game-configuration';
import { GameResults } from './game-results';

@Component({
  selector: 'app-word-counter',
  templateUrl: './word-counter.component.html',
  styleUrls: ['./word-counter.component.scss']
})
export class WordCounterComponent {
  gameStarted: boolean = false;
  wordList: string[] = ['this', 'is', 'name', 'who', 'distance', 'traveled', 'car', 'bike'];
  localGameResults = {};
  gameResults: GameResults[] = [];
  gameConfigurations: GameConfiguration[] = [];

  startGame(): void {
    this.gameStarted = true;
    this.setupGameConfigurations();
  }

  setupGameConfigurations(): void {
    const configOneNumber = this.getRandomNumber(10) + 1;
    const configTwoNumber = this.getRandomNumber(3) + 1;
    const configTwoWord = this.getRandomWordFromList();
    const configThreeNumber = this.getRandomNumber(5) + 1;

    const configOne = new GameConfiguration(
      `Write a sentance containing ${configOneNumber} words`, 
      'wordCount',
      configOneNumber
    );
    
    const configTwo = new GameConfiguration(
      `Write a sentence containing ${configTwoNumber} times the word ${configTwoWord}`, 
      'specificWordCount',
      configTwoNumber,
      configTwoWord
    );
    
    const configThree = new GameConfiguration(
      `Write a sentence where the second most occuring word occurs ${configThreeNumber} times`, 
      'wordFrequency',
      configThreeNumber
    );

    this.gameConfigurations = [configOne, configTwo, configThree];
  }

  getRandomWordFromList(): string {
    return this.wordList[this.getRandomNumber(this.wordList.length) - 1];
  }

  getRandomNumber(below: number): number {
    return Math.floor(Math.random() * below);
  }
}