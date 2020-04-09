import { Injectable } from '@angular/core';
import { TranslateService } from 'node_modules/@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public browserLang: string;
  public langFooterEs;
  public langFooterEn;
  public visibleDivEs: boolean;
  public visibleDivEn: boolean;

  constructor(public translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('es');
    this.browserLang = translate.getBrowserLang();
    translate.use(this.browserLang.match(/en|es/) ? this.browserLang: 'es');
  }
  setLanguageEs(langEs) {
    this.langFooterEs = langEs;
    this.langFooterEs = this.translate.use("es");
    this.browserLang = "es";
    this.visibleDivEs = true;
    this.visibleDivEn = false;
  }
  setLanguageEn(langEn) {
    this.langFooterEn = langEn;
    this.langFooterEs = this.translate.use("en");
    this.browserLang = "en";
    this.visibleDivEn = true;
    this.visibleDivEs = false;
  }
}
