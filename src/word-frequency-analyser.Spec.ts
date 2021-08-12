import {WordFrequencyAnalyser} from './word-frequency-analyser';

describe('WordFrequencyAnalyser', function() {
    wordFrequencyAnalyser: WordFrequencyAnalyser;

    beforeEach(() => {
        this.wordFrequencyAnalyser = new WordFrequencyAnalyser();
    })
  
    it('should be able to calculate the highest frequency of a word in a given string', () => {
        const testString: string = 'This is the test string. Calculate the frequency of the most occuring word in the string.';
        const highestWordFrequency: number = this.wordFrequencyAnalyser.calculateHighestFrequency(testString);

        expect(highestWordFrequency).toBe(4);
    });

    it('should return 0 when calculating the highest frequency of a word in a given string, but no valid word is given', () => {
        const testString: string = 'N_O V_alid W*ords i)n thi+s String##';
        const highestWordFrequency: number = this.wordFrequencyAnalyser.calculateHighestFrequency(testString);
        expect(highestWordFrequency).toBe(0);
    });

    
  });