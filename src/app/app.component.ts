import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LanguageService } from '../app/services/language.service';
//import { MetatagService } from '../app/services/metatags.service';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public browserLang: string;
  //title = 'landingMaat';
  constructor(
    public language: LanguageService,
    public router: Router,
    //public metatagService: MetatagService,
    public title: Title
    ) {
      console.log(this.language.browserLang);
      console.log("AQUI SERVICIO DE TRADUCCION");
    /*this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('es');
    this.browserLang = translate.getBrowserLang();
    //console.log(this.browserLang);
    translate.use(this.browserLang.match(/en|es/) ? this.browserLang: 'es');*/

  }

ngOnInit(){
  }
}