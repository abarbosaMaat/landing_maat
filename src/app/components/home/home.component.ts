import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

declare let ga:Function; // Declare ga as a function

@Injectable()

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
export class GoogleAnalyticsService {

    //create our event emitter to send our data to Google Analytics
    public eventEmitter(eventCategory: string,
      eventAction: string,
      eventLabel: string = null,
      eventValue: number = null) {
  ga('send', 'event', {
  eventCategory: eventCategory,
  eventLabel: eventLabel,
  eventAction: eventAction,
  eventValue: eventValue
  });
  
      }
}
