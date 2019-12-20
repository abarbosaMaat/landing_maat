import { Component, OnInit, Output } from '@angular/core';
import { LanguageService } from '../../services/language.service';


@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.css']
})
export class Footer2Component implements OnInit {
  public browserLang: string;
  visibleDivEs: boolean;
  visibleDivEn: boolean;

  @Output()
  public langEs: string;
  public langEn: string;

  constructor(public language: LanguageService) {
  }
  changeEs(){
    this.browserLang = 'es';
    this.language.translate.use(this.browserLang);
    this.visibleDivEs = true;
    this.visibleDivEn = false;
    this.langEs = 'es';
    this.language.setLanguageEs(this.langEs);
  }
  changeEn(){
    this.browserLang = 'en';
    this.language.translate.use(this.browserLang);
    this.visibleDivEn = true;
    this.visibleDivEs = false;
    this.langEn = 'en';
    this.language.setLanguageEn(this.langEn);
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
