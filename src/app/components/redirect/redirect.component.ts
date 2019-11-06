import { Component, OnInit } from '@angular/core';
import { detectChanges } from '@angular/core/src/render3';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

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
    } else {
      console.log("no funciono");
      window.location.href = "https://apps.apple.com/mx/app/maatai/id1482680056";
    }
  }

}
