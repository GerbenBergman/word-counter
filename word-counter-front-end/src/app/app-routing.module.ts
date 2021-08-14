import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'landing-page',
    loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  {
    path: 'word-counter',
    loadChildren: () => import('./word-counter/word-counter.module').then(m => m.WordCounterModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'landing-page'
  },
  {
    path: '**', 
    redirectTo: 'landing-page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
