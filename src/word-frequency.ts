export interface IWordFrequency {
    getWord(): string;
    getFrequency(): number;
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