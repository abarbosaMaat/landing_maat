import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
 public detectLanguage: string;
 public url: string;
 public urlSanitizer;


  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.getTranslate();
  }

  getTranslate() {
    this.detectLanguage = navigator.language;
    console.log(this.detectLanguage);
    if(this.detectLanguage == 'es-419' || this.detectLanguage == 'es' || this.detectLanguage == 'es-US' || this.detectLanguage == 'es-MX') {
     this.url = "//www.youtube.com/embed/lnuOPdi5J2U?autoplay=1";
    }else if(this.detectLanguage == 'en-US' || this.detectLanguage == 'en' || this.detectLanguage == 'en-CA'){
      console.log("Aqui url");
      this.url = "//www.youtube.com/embed/INck5NfO0HY?autoplay=0";
    }else {
      this.url = "//www.youtube.com/embed/lnuOPdi5J2U?autoplay=1";
      console.log("error en carga de video");
    }
    this.urlSanitizer = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    console.log(this.url);
  }
}
