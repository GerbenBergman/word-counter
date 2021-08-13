"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const word_frequency_1 = require("./word-frequency");
describe('WordFrequency', function () {
    wordFrequency: word_frequency_1.WordFrequency;
    beforeEach(() => {
        this.wordFrequency = new word_frequency_1.WordFrequency('test', 1);
    });
    it('should return the word assigned to the WordFrequency instance', () => {
        expect(this.wordFrequency.getWord()).toBe('test');
    });
    it('should return the frequency assigned to the WordFrequency instance', () => {
        expect(this.wordFrequency.getFrequency()).toBe(1);
    });
});
