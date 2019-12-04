import { Component, OnInit } from '@angular/core';
import {TranslateService} from '../../../../node_modules/@ngx-translate/core';


@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.css']
})
export class Footer2Component implements OnInit {
  public browserLang: string;
  visibleDivEs: boolean;
  visibleDivEn: boolean;

  constructor(public translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('es');
    this.browserLang = translate.getBrowserLang();
    translate.use(this.browserLang.match(/en|es/) ? this.browserLang: 'es');
  }
  changeEs(){
    this.browserLang = 'es';
    this.translate.use(this.browserLang);
    this.visibleDivEs = true;
    this.visibleDivEn = false;
  }
  changeEn(){
    this.browserLang = 'en';
    this.translate.use(this.browserLang);
    this.visibleDivEn = true;
    this.visibleDivEs = false;
  }

  ngOnInit() {
    this.checkLanguage();
  }

  checkLanguage() {
    if(this.browserLang == 'es') {
      this.visibleDivEs = true;
    } else {
      this.visibleDivEn = true;
    }
  }

}
