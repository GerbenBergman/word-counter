import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordCounterComponent } from './word-counter.component';

const routes: Routes = [
  {
    path: '',
    component: WordCounterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordCounterRoutingModule { }