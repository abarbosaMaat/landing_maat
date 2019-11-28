import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {TranslateService} from '../../node_modules/@ngx-translate/core';
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
  constructor(public translate: TranslateService, public router: Router, public googleAnalyticsEventsService: GoogleAnalyticsEventsService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('es');
    this.browserLang = translate.getBrowserLang();
    console.log(this.browserLang);
    translate.use(this.browserLang.match(/en|es/) ? this.browserLang: 'es');
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

 /* constructor(private router: Router) {
    const navEventsEnd = router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    );
    navEventsEnd.subscribe((event: NavigationEnd) =>  {
     if (event instanceof NavigationEnd) {
      gtag('config', 'UA-123554552-1', {
        'page_path': event.urlAfterRedirects
      });
    }
  });
 }*/
}

