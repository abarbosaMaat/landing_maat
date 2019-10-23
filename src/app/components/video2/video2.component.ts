import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video2',
  templateUrl: './video2.component.html',
  styleUrls: ['./video2.component.css']
})
export class Video2Component implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  url2 = "//www.youtube.com/embed/OiXmaJs4HlE?autoplay=1";
  //urlSinProcesar = "//www.youtube.com/embed/OiXmaJs4HlE&t?rel=0";
  
  urlSanitizer2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.url2);

  ngOnInit() {
  }

}
