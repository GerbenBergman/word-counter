import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WordCounterComponent } from './word-counter/word-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    WordCounterComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
