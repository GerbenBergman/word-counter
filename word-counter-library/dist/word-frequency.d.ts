export interface IWordFrequency {
    getWord(): string;
    getFrequency(): number;
}
export declare class WordFrequency implements IWordFrequency {
    private _word;
    private _frequency;
    constructor(word: string, frequency: number);
    getWord(): string;
    getFrequency(): number;
}
