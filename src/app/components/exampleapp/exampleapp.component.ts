import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-exampleapp',
  templateUrl: './exampleapp.component.html',
  styleUrls: ['./exampleapp.component.css']
})
export class ExampleappComponent implements OnInit {
  public detectLanguage: string;
  visibleDivEs: boolean;
  visibleDivEn: boolean;

  constructor() { }

  ngOnInit() {
    this.changeImages();
  }

  changeImages() {
    this.detectLanguage = navigator.language;
    console.log(this.detectLanguage);
    if(this.detectLanguage == 'es-419' || this.detectLanguage == 'es' || this.detectLanguage == 'es-US' || this.detectLanguage == 'es-MX') {
      this.visibleDivEs = true;
    }else if(this.detectLanguage == 'en-US' || this.detectLanguage == 'en' || this.detectLanguage == 'en-CA'){
      this.visibleDivEn = true;
    }else {
      this.visibleDivEs = true;
      console.log("error en carga de imagenes");
    }
  }


  /*@HostListener("scroll", ['$event'])
  doSomethingOnInternalScroll($event:Event){
    let scrollOffset = document.documentElement.scrollTop > 600;
    //$event.srcElement.offsetTop > 600;
    console.log("scroll: ", scrollOffset);
  }*/

}
