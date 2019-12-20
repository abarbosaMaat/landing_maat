import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-video2',
  templateUrl: './video2.component.html',
  styleUrls: ['./video2.component.css']
})
export class Video2Component implements OnInit {
  public urlEs2: string;
  public urlEn2: string;
  public urlSanitizerEs2;
  public urlSanitizerEn2;

  constructor(private sanitizer: DomSanitizer,
    public language: LanguageService
    ) { }

  ngOnInit() {
    this.getVideo();
  }

  getVideo() {
    this.urlEs2 = "//www.youtube.com/embed/OiXmaJs4HlE?autoplay=1";
    this.urlEn2 = "//www.youtube.com/embed/3VVnoDL58qE?autoplay=1";
    if(this.language.browserLang == 'es') {
      this.language.visibleDivEs = true;
    }else if(this.language.browserLang == 'en'){
      this.language.visibleDivEn = true;
    }else {
      this.language.visibleDivEs = true;
      console.log("error en carga de video");
    }
    this.urlSanitizerEs2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlEs2);
    this.urlSanitizerEn2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlEn2);
  }

}
