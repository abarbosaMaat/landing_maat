import { Component, OnInit, Input } from '@angular/core';
import LocalStorageService from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  public endProcessLayout: string;
  @Input() endProcess: boolean;
  constructor(private _localStaroge: LocalStorageService) { }

  ngOnInit() {
    this.endProcessLayout = this._localStaroge.getItem<string>("end_process");
  }

}
