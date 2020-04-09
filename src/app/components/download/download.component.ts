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
    let osMobile = navigator.userAgent;
    console.log(osMobile);
    if(/Android/i.test(osMobile)){
      console.log("Si funciona");
      window.location.href = "https://play.google.com/store/apps/details?id=com.maatai.maatapp&hl=es-419&ah=pny3Z6zoy162CNptM1OYajk5NF0";
    } else if(/iPhone/i.test(osMobile)) {
      window.location.href = "https://apps.apple.com/us/app/maat-ai/id1482680056";
    }
    else {
      window.location.href = "https://www.maatai.com/#/link";
    }
  }

}
