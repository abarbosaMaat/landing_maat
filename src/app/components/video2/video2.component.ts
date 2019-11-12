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
    if(this.detectLanguage == 'es-419') {
      this.url2 = "//www.youtube.com/embed/OiXmaJs4HlE?autoplay=1";
    }else if(this.detectLanguage == 'en-US'){
      this.url2 = "//www.youtube.com/embed/3VVnoDL58qE?autoplay=1";
    }else {
      console.log("error en carga de video");
    }
    this.urlSanitizer2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.url2);
  }

}
