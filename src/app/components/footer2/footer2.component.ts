import { Component, OnInit, Output } from '@angular/core';
import { LanguageService } from '../../services/language.service';

declare var hbspt: any;

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
    if(this.language.browserLang == 'es') {
      this.visibleDivEs = true;
      this.visibleDivEn = false;
    } else {
      this.visibleDivEn = true;
      this.visibleDivEs = false;
    }
  }

  contact() {
    hbspt.forms.create({
	    portalId: "6971767",
      formId: "14c4e042-98a4-4192-9161-4a70365bbe86",
      target: "#hubspotForm"
});
//window.scrollTo (0, 0);
  }
  contactEn() {
    hbspt.forms.create({
      portalId: "6971767",
      formId: "571c6a1e-1605-4f44-9e18-04f5bfe30c96",
      target: "#hubspotFormEn"
    });
//window.scrollTo (0, 0);
  }

}
