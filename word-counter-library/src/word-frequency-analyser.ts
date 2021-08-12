import {WordFrequency} from './word-frequency';

export interface IWordFrequencyAnalyser {
    calculateHighestFrequency(text: string): number;
    calculateFrequencyForWord(text: string, word: string): number;
    calculateMostFrequentNWords(text: string, n: number): WordFrequency[];
}

export class WordFrequencyAnalyser implements IWordFrequencyAnalyser {
    calculateHighestFrequency(text: string): number {
        const mostFrequentWord: WordFrequency = this.calculateMostFrequentNWords(text, 1)[0];
        return mostFrequentWord ? mostFrequentWord.getFrequency() : 0;
    }

    calculateFrequencyForWord(text: string, word: string): number {
        return text.split(' ').filter((wordInText: string) => wordInText === word && this.isWord(word)).length;
    }

    calculateMostFrequentNWords(text: string, n: number): WordFrequency[] {
        let wordOccurences: WordFrequency[] = [];
        
        text.split(' ').forEach((wordInArray: string) => {
            if(!wordOccurences.some((el: WordFrequency) => el.getWord() === wordInArray) && this.isWord(wordInArray)) {
                wordOccurences.push(new WordFrequency(wordInArray, this.calculateFrequencyForWord(text, wordInArray)));
            }
        });

        return wordOccurences.sort((a: WordFrequency, b: WordFrequency) => this.wordOccurencesSortFunction(a, b)).slice(0, n);
    }
    
    private wordOccurencesSortFunction(a: WordFrequency, b: WordFrequency): number {
        if(a.getFrequency() < b.getFrequency()) {
            return 1;
        } else if(a.getFrequency() === b.getFrequency()) {
            return a.getWord() > b.getWord() ? 1 : -1;
        }

        return -1;
    }

    private isWord(word: string): boolean {
        return new RegExp('^[a-zA-Z]+$').test(word);
    }
}