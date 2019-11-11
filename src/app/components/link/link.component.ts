import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  constructor( public router: Router) { }

  ngOnInit() {
  }
  close(numberLink) {
    console.log(numberLink);
    window.location.href ='https://maat-ia-development.appspot.com/ws/hp/sendDownloadlink?cel=${numberLink}';
    //this.router.navigate(['/']);
    /*if (numberLink = '') {
      console.log("error");
    } else {

    }*/
    //https://maat-ia-development.appspot.com/ws/hp/sendDownloadlink?cel={{number}}

  }

  }
