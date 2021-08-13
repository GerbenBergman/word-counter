"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordFrequency = void 0;
class WordFrequency {
    constructor(word, frequency) {
        this._word = word;
        this._frequency = frequency;
    }
    getWord() {
        return this._word;
    }
    getFrequency() {
        return this._frequency;
    }
}
exports.WordFrequency = WordFrequency;
