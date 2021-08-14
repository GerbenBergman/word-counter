import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordCounterRoutingModule } from './word-counter-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { WordCounterComponent } from './word-counter.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    WordCounterComponent
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
