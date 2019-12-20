import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public browserLang: string;
  visibleDivEs: boolean;
  visibleDivEn: boolean;

  @Output()
  public langEs: string;
  public langEn: string;

  constructor(public language: LanguageService) {
  }
  changeEs(){
    this.language.translate.use('es');
    this.visibleDivEs = true;
    this.visibleDivEn = false;
    this.langEs = 'es';
    this.language.setLanguageEs(this.langEs);
  }
  changeEn(){
    this.language.translate.use('en');
    this.visibleDivEn = true;
    this.visibleDivEs = false;
    this.langEn = 'en';
    this.language.setLanguageEn(this.langEn);
  }
  ngOnInit() {
    this.checkLanguage();
  }


  checkLanguage() {
    if(this.language.browserLang == 'es') {
      this.visibleDivEs = true;
    } else {
      this.visibleDivEn = true;
    }
  }

}
