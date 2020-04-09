import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';


@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {

  constructor(public language: LanguageService) { }

  ngOnInit() {
  }

}
