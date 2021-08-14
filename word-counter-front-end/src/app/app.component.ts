import { Component, OnInit } from '@angular/core';
import { WordFrequencyAnalyser } from '../../../word-counter-library/dist/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Word Counter';

  ngOnInit(): void {
    console.log(new WordFrequencyAnalyser().calculateHighestFrequency('hallo hallo ik ben gerben ben ben'))
  }
}
