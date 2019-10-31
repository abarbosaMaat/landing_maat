import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {TranslateService} from '../../node_modules/@ngx-translate/core';
//import { filter } from 'rxjs/operators';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landingMaat';
  constructor(public translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang: 'en');    
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

