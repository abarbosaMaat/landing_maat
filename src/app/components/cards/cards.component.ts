import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  detectMobile(){
    let osMobile = navigator.userAgent;
    console.log(osMobile);
    if(/Android/i.test(osMobile)){
      console.log("Si funciona");
      window.location.href = "https://play.google.com/store/apps/details?id=com.maatai.maatapp&hl=es-419&ah=pny3Z6zoy162CNptM1OYajk5NF0";
    } else if(osMobile.includes('iPhone') || /iPhone/i.test(osMobile)) {
      window.location.href = "https://testflight.apple.com/join/0Zrc0HME";
    } else{
      window.location.href = "https://www.maatai.com/link";
    }
  }

}
