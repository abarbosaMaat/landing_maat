import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../app/services/language.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public browserLang: string;
  constructor(
    public language: LanguageService,
    public router: Router,
    public title: Title,
    ) {
  }

ngOnInit(){
  }
}
