import { Component, OnInit } from '@angular/core';
import {TranslateService} from '../../../../node_modules/@ngx-translate/core';


@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.css']
})
export class Footer2Component implements OnInit {
  public browserLang: string;

  constructor(public translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('es');
    this.browserLang = translate.getBrowserLang();
    console.log(this.browserLang);
  }
  changeEs(){
    this.browserLang = 'es';
    this.translate.use(this.browserLang);
  }
  changeEn(){
    this.browserLang = 'en';
    this.translate.use(this.browserLang);
    console.log(this.browserLang);
  }

  ngOnInit() {
  }

}
