import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';


@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  constructor(public language: LanguageService) { }

  ngOnInit() {
    this.getForm();
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
}
