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
  close() {
    this.router.navigate(['/']);
  }

  }
