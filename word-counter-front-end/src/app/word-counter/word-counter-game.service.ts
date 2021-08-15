import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { GameConfiguration } from './game-configuration';

@Injectable({
  providedIn: 'root'
})
export class WordCounterGameService {
  private _gameStarted: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private gameStarted$: Observable<boolean> = this._gameStarted.asObservable();

  private _gameFinished: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private gameFinished$: Observable<boolean> = this._gameFinished.asObservable();
  
  private _gameConfigurations: ReplaySubject<GameConfiguration[]> = new ReplaySubject<GameConfiguration[]>(1);
  private gameConfigurations$: Observable<GameConfiguration[]> = this._gameConfigurations.asObservable();

  private _gameResults: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);
  private gameResults$: Observable<string[]> = this._gameResults.asObservable();

  startGame(): void {
    this._gameStarted.next(true);
  }

  getGameStarted(): Observable<boolean> {
    return this.gameStarted$;
  }

  finishGame(gameResults: string[]): void {
    this._gameStarted.next(false);
    this._gameFinished.next(true);
    this.setGameResults(gameResults);
  }

  getGameFinished(): Observable<boolean> {
    return this.gameFinished$;
  }

  setGameConfigurations(gameConfigurations: GameConfiguration[]): void {
    this._gameConfigurations.next(gameConfigurations);
  }

  getGameConfigurations(): Observable<GameConfiguration[]> {
    return this.gameConfigurations$;
  }

  setGameResults(gameResults: string[]): void {
    this._gameResults.next(gameResults);
  }

  getGameResults(): Observable<string[]> {
    return this.gameResults$;
  }
}
