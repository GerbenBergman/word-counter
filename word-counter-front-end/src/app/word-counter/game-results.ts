import { WordFrequency } from "../../../../word-counter-library/dist";

export interface WordCount {
    word?: string;
    count: number;
    sentence: string;
}

interface IGameResults {
    getWordCount(): WordCount;
    getSpecificWordCount(): WordCount;
    getWordFrequency(): WordFrequency;
}

export class GameResults implements IGameResults {
    private _wordCount: WordCount;
    private _specificWordCount: WordCount;
    private _wordFrequency: WordFrequency;

    constructor(wordCount: WordCount, specificWordCount: WordCount, wordFrequency: WordFrequency) {
        this._wordCount = wordCount;
        this._specificWordCount = specificWordCount;
        this._wordFrequency = wordFrequency;
    }

    getWordCount(): WordCount {
        return this._wordCount;
    }

    getSpecificWordCount(): WordCount {
        return this._specificWordCount;
    }

    getWordFrequency(): WordFrequency {
        return this._wordFrequency;
    }
}