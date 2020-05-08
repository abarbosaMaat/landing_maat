import { Injectable, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';
import {HttpClientModule, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public langFooterEs;
  public langFooterEn;
  public visibleDivEs: boolean;
  public visibleDivEn: boolean;

  public browserLang = 'en';

  constructor(public translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('es');
    this.browserLang = translate.getBrowserLang();
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
