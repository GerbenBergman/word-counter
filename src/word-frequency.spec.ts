import {WordFrequency} from './word-frequency';

describe('WordFrequency', function() {
    wordFrequency: WordFrequency;
    
    beforeEach(() => {
        this.wordFrequency = new WordFrequency('test', 1)
    });

    it('should return the word assigned to the WordFrequency instance', () => {
        expect(this.wordFrequency.getWord()).toBe('test');
    });

    it('should return the frequency assigned to the WordFrequency instance', () => {
        expect(this.wordFrequency.getFrequency()).toBe(1);
    });
})