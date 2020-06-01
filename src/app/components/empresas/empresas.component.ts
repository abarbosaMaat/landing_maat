import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LanguageService } from '../../services/language.service';

declare var hbspt: any;

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  constructor(public language: LanguageService) { }

  ngOnInit() {
    this.getForm();
    this.contact();
    this.contactEn();
    this.checkAcceptCookies();
  }
  visible: boolean = true;
  @Output() close: EventEmitter<any> = new EventEmitter();

  checkAcceptCookies() {
    if (localStorage.getItem('acceptCookies') == 'true') {
      this.visible = !this.visible;
    } else {
        this.visible = true;
    }
}

  onGRDP() {
    localStorage.acceptCookies = 'true';
    this.visible = !this.visible;
      if (this.visible) {
        this.close.emit(null);
      }
  }

  getForm(){
    if(this.language.browserLang == 'es') {
      this.language.visibleDivEs = true;
    }else if(this.language.browserLang == 'en'){
      this.language.visibleDivEn = true;
    }else {
      this.language.visibleDivEs = true;
      console.log("error en form");
    }
  }

  contact() {
    console.log("funciono weee");
    hbspt.forms.create({
	    portalId: "6971767",
      formId: "14c4e042-98a4-4192-9161-4a70365bbe86",
      target: "#hubspotForm"
});
//window.scrollTo (0, 0);
  }
  contactEn() {
    console.log("funciono wee");
    hbspt.forms.create({
      portalId: "6971767",
      formId: "571c6a1e-1605-4f44-9e18-04f5bfe30c96",
      target: "#hubspotFormEn"
    });
//window.scrollTo (0, 0);
  }
}
