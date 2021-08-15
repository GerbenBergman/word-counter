import { Component, OnInit } from '@angular/core';
import { GameConfiguration } from '../game-configuration';
import { ViewChild } from '@angular/core';
import { WordCounterGameService } from '../word-counter-game.service';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html'
})
export class GameFieldComponent implements OnInit {
  @ViewChild('userInput') userInput: any; 
  
  wordList: string[] = ['this', 'is', 'name', 'who', 'distance', 'traveled', 'car', 'bike'];
  gameStage: number = 0;
  gameResults: string[] = [];
  gameConfigurations: GameConfiguration[] = [];

  constructor(private wordCounterGameService: WordCounterGameService) {
  }

  ngOnInit(): void {
    this.gameConfigurations = this.generateGameConfigurations();
    this.wordCounterGameService.setGameConfigurations(this.gameConfigurations);
  }

  submitSentence(): void {
    this.gameResults.push(this.userInput.nativeElement.value); 
    this.userInput.nativeElement.value = ''; 
    
    if(this.gameStage !== this.gameConfigurations.length -1) {
      this.gameStage = ++this.gameStage;
    } else {
      this.wordCounterGameService.finishGame(this.gameResults);
    }
  }

  generateGameConfigurations(): GameConfiguration[] {
    const configOneNumber = this.getRandomNumber(3) + 1;
    const configTwoNumber = this.getRandomNumber(3) + 1;
    const configTwoWord = this.getRandomWordFromList();
    const configThreeNumber = this.getRandomNumber(5) + 1;

    const configOne = new GameConfiguration(
      `Write a sentence in which the most occuring word occurs ${configOneNumber} times`, 
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

    return [configOne, configTwo, configThree];
  }

  getRandomWordFromList(): string {
    return this.wordList[this.getRandomNumber(this.wordList.length)];
  }

  getRandomNumber(below: number): number {
    return Math.floor(Math.random() * below);
  }
}
