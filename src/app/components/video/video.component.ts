import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {TranslateService} from '../../../../node_modules/@ngx-translate/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  //public translate: TranslateService;

  constructor(private sanitizer: DomSanitizer) {}

 /* let browserLang = translate.getBrowserLang();
    console.log(browserLang);
   if(browserLang = 'es') {*/
    url = "//www.youtube.com/embed/lnuOPdi5J2U?autoplay=1";
   //}

  //urlSinProcesar = "//www.youtube.com/embed/8pC5VZM2h8k?rel=0"+1;<--tambien los he visto de esta forma o cualquier entero

  urlSanitizer = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

  ngOnInit() {
  }

}
