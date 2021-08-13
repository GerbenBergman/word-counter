import { Component, OnInit } from '@angular/core';
import { WordFrequencyAnalyser } from '../../../word-counter-library/dist/index';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'word-counter-front-end';

  ngOnInit(): void {
    console.log(new WordFrequencyAnalyser().calculateHighestFrequency('hallo hallo ik ben gerben ben ben'))
  }
}
