import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordCounterRoutingModule } from './word-counter-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { WordCounterComponent } from './word-counter.component';
import { GameInstructionsComponent } from './game-instructions/game-instructions.component';
import { MatButtonModule } from '@angular/material/button';
import { GameFieldComponent } from './game-field/game-field.component';
import { GameResultComponent } from './game-result/game-result.component';

@NgModule({
  declarations: [
    WordCounterComponent,
    GameInstructionsComponent,
    GameFieldComponent,
    GameResultComponent
  ],
  imports: [
    CommonModule,
    WordCounterRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class WordCounterModule { }
