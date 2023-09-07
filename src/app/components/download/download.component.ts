import { Component, OnInit } from '@angular/core';
import { detectChanges } from '@angular/core/src/render3';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.detect();
  }

  detect(){
    let osMobile = window.navigator.userAgent || navigator.vendor || navigator.userAgent;
    if(osMobile.includes('Android') || /Android/i.test(osMobile) || navigator.userAgent.match(/Android/i) || /android/i.test(osMobile)){
      window.location.href = "https://play.google.com/store/apps/details?id=com.maatai.maatapp&hl=es-419&ah=pny3Z6zoy162CNptM1OYajk5NF0";
    } else if(osMobile.includes('iPhone') || /iPhone/i.test(osMobile) || navigator.userAgent.match(/iPhone/i)) {
      window.location.href = "https://testflight.apple.com/join/0Zrc0HME";
    } else{
      window.location.href = "https://www.maatai.com/link";
    }
  }

}
