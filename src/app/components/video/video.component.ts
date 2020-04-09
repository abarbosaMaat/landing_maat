import { Component, OnInit, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  public urlEs: string;
  public urlEn: string;
  public urlSanitizerEs;
  public urlSanitizerEn;

  constructor(private sanitizer: DomSanitizer,
    public language: LanguageService
    ) {}

  ngOnInit() {
    this.getTranslate();
  }

  getTranslate() {
    this.urlEs = "//www.youtube.com/embed/lnuOPdi5J2U?autoplay=0";
    this.urlEn = "//www.youtube.com/embed/INck5NfO0HY?autoplay=0";
    if(this.language.browserLang == 'es') {
      this.language.visibleDivEs = true;
    }else if(this.language.browserLang == 'en'){
      this.language.visibleDivEn = true;
    }else {
      this.language.visibleDivEs = true;
      console.log("error en carga de video");
    }
    this.urlSanitizerEs = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlEs);
    this.urlSanitizerEn = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlEn);
  }
}
