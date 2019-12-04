import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  public numberLink: string;

  constructor( public router: Router, private http: HttpClient) { }

  ngOnInit() {
  }
  close(numberLink) {
    console.log(numberLink);
    if(numberLink = ""){
      alert("Error en número");
    }else {
      this.http.get(`https://maat-ia-development.appspot.com/ws/hp/sendDownloadlink?cel=${numberLink}`)
      .subscribe(data => {
        console.log("si funciona");
      });window.location.href = `https://www.maatai.com/`;
      //window.location.href =`https://maat-ia-development.appspot.com/ws/hp/sendDownloadlink?cel=${numberLink}`;
    }
  }

  }
