import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LanguageService } from '../app/services/language.service';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { TranslateService } from  '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public browserLang: string;
  constructor(
    public language: LanguageService,
    public router: Router,
    public title: Title,
    translate:  TranslateService
    ) {
      const currentLanguage  =  translate.getBrowserLang();
      translate.use(currentLanguage.match(/en|es/) ? currentLanguage : 'en');
      console.log(this.language.browserLang);
      console.log("AQUI SERVICIO DE TRADUCCION");
  }

ngOnInit(){
  }
}
