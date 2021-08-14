import { Component } from '@angular/core';
import { GameConfiguration } from './game-configuration';
import { ViewChild } from '@angular/core';
import { WordFrequencyAnalyser } from '../../../../word-counter-library/dist';

@Component({
  selector: 'app-word-counter',
  templateUrl: './word-counter.component.html',
  styleUrls: ['./word-counter.component.scss']
})
export class WordCounterComponent {
  @ViewChild('userInput') userInput: any; 

  gameStarted: boolean = false;
  gameFinished: boolean = false;
  wordList: string[] = ['this', 'is', 'name', 'who', 'distance', 'traveled', 'car', 'bike'];
  gameStage: number = 0;
  localGameResults: string[] = [];
  gameConfigurations: GameConfiguration[] = [];
  wordFrequencyAnalyser: WordFrequencyAnalyser = new WordFrequencyAnalyser();

  startGame(): void {
    this.gameStarted = true;
    this.setupGameConfigurations();
  }

  submitSentence(): void {
    this.localGameResults.push(this.userInput.nativeElement.value); 
    this.userInput.nativeElement.value = ''; 
  }
 
  nextGameStage(): void {
    this.gameStage = ++this.gameStage;
  }

  finishGame(): void {
    this.gameStarted = false;
    this.gameFinished = true;
  }

  getResult(sentence: string, gameConfiguration: GameConfiguration): boolean {
    const numberOfWords = gameConfiguration.getNumberOfWords();

    switch(gameConfiguration.getType()) {
      case 'wordCount':
        return this.wordFrequencyAnalyser.calculateHighestFrequency(sentence) === numberOfWords;
      case 'specificWordCount':
        return this.wordFrequencyAnalyser.calculateFrequencyForWord(sentence, gameConfiguration.getWord() as string) === numberOfWords;
      case 'wordFrequency':
        const secondMostOccuringWord = this.wordFrequencyAnalyser.calculateMostFrequentNWords(sentence, numberOfWords)[1];
        return secondMostOccuringWord ? secondMostOccuringWord.getFrequency() === numberOfWords : false;
    }

    return false;
  }

  setupGameConfigurations(): void {
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

    this.gameConfigurations = [configOne, configTwo, configThree];
  }

  getRandomWordFromList(): string {
    return this.wordList[this.getRandomNumber(this.wordList.length)];
  }

  getRandomNumber(below: number): number {
    return Math.floor(Math.random() * below);
  }
}
