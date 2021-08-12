export interface IWordFrequency {
    getWord(): string;
    getFrequency(): number;
}

export interface IWordFrequencyAnalyser {
    calculateHighestFrequency(text: string): number;
    calculateFrequencyForWord(text: string, word: string): number;
    calculateMostFrequentNWords(text: string, n: number): WordFrequency[];
}

export class WordFrequency implements IWordFrequency {
    private _word: string;
    private _frequency: number;

    constructor(word: string, frequency: number) {
        this._word = word;
        this._frequency = frequency;
    }

    getWord(): string {
        return this._word;
    }

    getFrequency(): number {
        return this._frequency;
    }
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

        wordOccurences = wordOccurences.sort((a, b) => {
            if(a.getFrequency() < b.getFrequency()) {
                return 1;
            } else if(a.getFrequency() === b.getFrequency()) {
                return a.getWord() > b.getWord() ? 1 : -1;
            }

            return -1;
        });

        wordOccurences = wordOccurences.slice(0, n);

        return wordOccurences;
    }
    
    private isWord(word: string): boolean {
        return new RegExp('^[a-zA-Z]+$').test(word);
    }
}