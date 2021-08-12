import { WordFrequency } from './word-frequency';
import {WordFrequencyAnalyser} from './word-frequency-analyser';

describe('WordFrequencyAnalyser', function() {
    wordFrequencyAnalyser: WordFrequencyAnalyser;
    testStringWithWords: String;
    testStringWithoutWords: String;

    beforeEach(() => {
        this.wordFrequencyAnalyser = new WordFrequencyAnalyser();
        this.testStringWithWords = 'This is the test string on which the calculations are excecuted in order to check the corectness of the methods which are implemented';
        this.testStringWithoutWords = 'N_O V_alid W*ords i)n thi+s String##';
    })
  
    it('should be able to calculate the highest frequency of a word in a given string', () => {
        const highestWordFrequency: number = this.wordFrequencyAnalyser.calculateHighestFrequency(this.testStringWithWords);
        expect(highestWordFrequency).toBe(4);
    });

    it('should return 0 when calculating the highest frequency of a word in a given string, but no valid word is given', () => {
        const highestWordFrequency: number = this.wordFrequencyAnalyser.calculateHighestFrequency(this.testStringWithoutWords);
        expect(highestWordFrequency).toBe(0);
    });

    it('should be able to calculate the frequency of specific word in a given string', () => {
        const wordFrequency: number = this.wordFrequencyAnalyser.calculateFrequencyForWord(this.testStringWithWords, 'which');
        expect(wordFrequency).toBe(2);
    });

    it('should return 0 when the frequency is calculated for a string that is not a word', () => {
        const wordFrequency: number = this.wordFrequencyAnalyser.calculateFrequencyForWord(this.testStringWithoutWords, 'V_alid');
        expect(wordFrequency).toBe(0);
    });

    it('should be able to return the 3 most used words inside a string, sorted by most frequent occurence and in alphabetical order', () => {
        const mostOccuringWords: WordFrequency[] = this.wordFrequencyAnalyser.calculateMostFrequentNWords(this.testStringWithWords, 3);
        expect(mostOccuringWords[0].getWord()).toBe('the');
        expect(mostOccuringWords[0].getFrequency()).toBe(4);
        expect(mostOccuringWords[2].getWord()).toBe('which');
        expect(mostOccuringWords[2].getFrequency()).toBe(2);
    });
});