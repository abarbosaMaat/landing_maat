import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

   url = "//www.youtube.com/embed/lnuOPdi5J2U?autoplay=1";
  //urlSinProcesar = "//www.youtube.com/embed/8pC5VZM2h8k?rel=0"+1;<--tambien los he visto de esta forma o cualquier entero
  
  urlSanitizer = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

  ngOnInit() {
  }

}
