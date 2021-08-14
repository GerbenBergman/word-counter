export type gameConfigurationType = 'wordCount' | 'specificWordCount' | 'wordFrequency'; 

interface IGameConfiguration {
    getInstructions(): string;
    getType(): string;
}

export class GameConfiguration implements IGameConfiguration {
    private _instructions: string;
    private _type: gameConfigurationType;
    private _numberOfWords: number;
    private _word: string | undefined;

    constructor(instructions: string, type: gameConfigurationType, numberOfWords: number, word?: string) {
        this._instructions = instructions;
        this._type = type;
        this._numberOfWords = numberOfWords;
        this._word = word;
    }

    getInstructions(): string {
        return this._instructions;
    }

    getType(): string {
        return this._type;
    }

    getNumberOfWords(): number {
        return this._numberOfWords;
    }

    getWord(): string | undefined {
        return this._word;
    }
}