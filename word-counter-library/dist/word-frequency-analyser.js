"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordFrequencyAnalyser = void 0;
const word_frequency_1 = require("./word-frequency");
class WordFrequencyAnalyser {
    calculateHighestFrequency(text) {
        const mostFrequentWord = this.calculateMostFrequentNWords(text, 1)[0];
        return mostFrequentWord ? mostFrequentWord.getFrequency() : 0;
    }
    calculateFrequencyForWord(text, word) {
        return text.split(' ').filter((wordInText) => wordInText === word && this.isWord(word)).length;
    }
    calculateMostFrequentNWords(text, n) {
        let wordOccurences = [];
        text.split(' ').forEach((wordInArray) => {
            if (!wordOccurences.some((el) => el.getWord() === wordInArray) && this.isWord(wordInArray)) {
                wordOccurences.push(new word_frequency_1.WordFrequency(wordInArray, this.calculateFrequencyForWord(text, wordInArray)));
            }
        });
        return wordOccurences.sort((a, b) => this.wordOccurencesSortFunction(a, b)).slice(0, n);
    }
    wordOccurencesSortFunction(a, b) {
        if (a.getFrequency() < b.getFrequency()) {
            return 1;
        }
        else if (a.getFrequency() === b.getFrequency()) {
            return a.getWord() > b.getWord() ? 1 : -1;
        }
        return -1;
    }
    isWord(word) {
        return new RegExp('^[a-zA-Z]+$').test(word);
    }
}
exports.WordFrequencyAnalyser = WordFrequencyAnalyser;
