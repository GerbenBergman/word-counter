import { WordFrequency } from './word-frequency';
export interface IWordFrequencyAnalyser {
    calculateHighestFrequency(text: string): number;
    calculateFrequencyForWord(text: string, word: string): number;
    calculateMostFrequentNWords(text: string, n: number): WordFrequency[];
}
export declare class WordFrequencyAnalyser implements IWordFrequencyAnalyser {
    calculateHighestFrequency(text: string): number;
    calculateFrequencyForWord(text: string, word: string): number;
    calculateMostFrequentNWords(text: string, n: number): WordFrequency[];
    private wordOccurencesSortFunction;
    private isWord;
}
