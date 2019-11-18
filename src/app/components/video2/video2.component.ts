import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video2',
  templateUrl: './video2.component.html',
  styleUrls: ['./video2.component.css']
})
export class Video2Component implements OnInit {
  public detectLanguage: string;
 public url2: string;
 public urlSanitizer2;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getVideo();
  }
  getVideo() {
    this.detectLanguage = navigator.language;
    console.log(this.detectLanguage);
    if(this.detectLanguage == 'es-419' || this.detectLanguage == 'es' || this.detectLanguage == 'es-US' || this.detectLanguage == 'es-MX') {
      this.url2 = "//www.youtube.com/embed/OiXmaJs4HlE?autoplay=1";
    }else if(this.detectLanguage == 'en-US' || this.detectLanguage == 'en' || this.detectLanguage == 'en-CA'){
      this.url2 = "//www.youtube.com/embed/3VVnoDL58qE?autoplay=1";
    }else {
      this.url2 = "//www.youtube.com/embed/lnuOPdi5J2U?autoplay=1";
      console.log("error en carga de video");
    }
    this.urlSanitizer2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.url2);
  }

}
