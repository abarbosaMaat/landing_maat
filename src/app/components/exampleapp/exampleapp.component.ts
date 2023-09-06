import { Component, OnInit, HostListener } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-exampleapp',
  templateUrl: './exampleapp.component.html',
  styleUrls: ['./exampleapp.component.css']
})
export class ExampleappComponent implements OnInit {
  visibleDivEs: boolean;
  visibleDivEn: boolean;
  public browserLang: string;

  constructor(public language: LanguageService) {
    if(language.langFooterEs == 'es') {
      this.language.visibleDivEs = true;
      this.language.visibleDivEn = false;
    }else if(language.langFooterEn == 'en'){
      this.language.visibleDivEn = true;
      this.language.visibleDivEs = false;
    }
  }

  ngOnInit() {
    this.changeImages();
  }

  /*functionChange() {
    if(this.language.langFooterEs == 'es') {
      this.visibleDivEs = true;
      this.visibleDivEn = false;
    } else if(this.language.langFooterEn == 'en') {
      this.visibleDivEn = true;
      this.visibleDivEs = false;
    }
  }*/

  changeImages() {
    if(this.language.browserLang == 'es') {
      this.language.visibleDivEs = true;
      this.language.visibleDivEn = false;
    }else if(this.language.browserLang == 'en'){
      this.language.visibleDivEn = true;
      this.language.visibleDivEs = false;
    }else {
      this.visibleDivEs = true;
    }
  }


  /*@HostListener("scroll", ['$event'])
  doSomethingOnInternalScroll($event:Event){
    let scrollOffset = document.documentElement.scrollTop > 600;
    //$event.srcElement.offsetTop > 600;
    console.log("scroll: ", scrollOffset);
  }*/

}
