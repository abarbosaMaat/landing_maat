import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { GoogleAnalyticsEventsService } from '../../services/google-analytics-events-service';
import { Router, NavigationEnd } from '@angular/router';

declare var ga: Function;

@Injectable()

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, public googleAnalyticsEventsService: GoogleAnalyticsEventsService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

  ngOnInit() {
  }

  detect(){
    let osMobile = navigator.userAgent;
    console.log(osMobile);
    if(/Android/i.test(osMobile)){
      console.log("Si funciona");
      window.location.href = "https://play.google.com/store/apps/details?id=com.maatai.maatapp&hl=es-419&ah=pny3Z6zoy162CNptM1OYajk5NF0";
    } else {
      console.log("no funciono");
      window.location.href = "https://apps.apple.com/mx/app/maatai/id1482680056";
    }
    this.googleAnalyticsEventsService.emitEvent("sendMesg", "sendApp", "userLabel", 1);
  }

}
export class GoogleAnalyticsService {

  /*  //create our event emitter to send our data to Google Analytics
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

      }*/
}
