import { Component, OnInit } from '@angular/core';

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
      //document.getElementById('imgEn').style.display='none';
      this.visibleDivEs = true;
      //document.getElementById('imgEs').style.display='block';
    }else if(this.detectLanguage == 'en-US' || this.detectLanguage == 'en' || this.detectLanguage == 'en-CA'){
      this.visibleDivEn = true;
      //document.getElementById('imgEs').style.display='none';
      //document.getElementById('imgEn').style.display='block';
    }else {
      this.visibleDivEs = true;
      console.log("error en carga de imagenes");
    }
  }

}
