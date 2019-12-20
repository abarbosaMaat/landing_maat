import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {LanguageService } from '../app/services/language.service';
import { GoogleAnalyticsEventsService } from './services/google-analytics-events-service';

declare var ga: Function;

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public browserLang: string;
  title = 'landingMaat';
  constructor(
    public language: LanguageService,
    public router: Router,
    public googleAnalyticsEventsService: GoogleAnalyticsEventsService
    ) {
      console.log(this.language.browserLang);
      console.log("AQUI SERVICIO DE TRADUCCION");
    /*this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('es');
    this.browserLang = translate.getBrowserLang();
    //console.log(this.browserLang);
    translate.use(this.browserLang.match(/en|es/) ? this.browserLang: 'es');*/

    //Google analytics
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }
  submitEvent() { // event fired from home.component.html element (button, link, ... )
    this.googleAnalyticsEventsService.emitEvent("testCategory", "testAction", "testLabel", 10);

}

ngOnInit(){
  }
}

