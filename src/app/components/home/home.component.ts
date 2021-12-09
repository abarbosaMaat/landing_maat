import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

declare var ga: Function;

@Injectable()

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.checkAcceptCookies();
  }
  visible: boolean = true;
  @Output() close: EventEmitter<any> = new EventEmitter();

  checkAcceptCookies() {
    if (localStorage.getItem('acceptCookies') == 'true') {
      this.visible = !this.visible;
    } else {
      this.visible = true;
    }
}

  onGRDP() {
    localStorage.acceptCookies = 'true';
    this.visible = !this.visible;
      if (this.visible) {
        this.close.emit(null);
      }
  }

  detect(){
    let osMobile = navigator.userAgent;
    console.log(osMobile);
    if(/Android/i.test(osMobile)){
      console.log("Si funciona");
      window.location.href = "https://play.google.com/store/apps/details?id=com.maatai.maatapp&hl=es-419&ah=pny3Z6zoy162CNptM1OYajk5NF0";
    }  else if(osMobile.includes('iPhone') || /iPhone/i.test(osMobile)) {
      window.location.href = "https://testflight.apple.com/join/0Zrc0HME";
    } else{
      window.location.href = "https://www.maatai.com/link";
    }
  }

}
