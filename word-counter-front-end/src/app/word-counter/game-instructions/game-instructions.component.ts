import { Component } from '@angular/core';
import { WordCounterGameService } from '../word-counter-game.service';

@Component({
  selector: 'app-game-instructions',
  templateUrl: './game-instructions.component.html'
})
export class GameInstructionsComponent {
  
  constructor(private wordCounterGameService: WordCounterGameService) {
  }
  
  startGame(): void {
    this.wordCounterGameService.startGame();
  }
}
