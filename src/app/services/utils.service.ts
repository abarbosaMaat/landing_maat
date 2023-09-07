import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private _deletedAccount = new BehaviorSubject<boolean>(false);
  public deletedAccount = this._deletedAccount.asObservable();

  constructor() { }

  onDeletedAccount(state: boolean) {
    this._deletedAccount.next(state);
  }
}
