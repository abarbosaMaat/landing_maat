import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { CountriesResponse } from '../models/country.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  private _loader = new BehaviorSubject<boolean>(false);
  public loader = this._loader.asObservable();
  private headers =  {
    withCredentials: false,
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': '12345',
    }),
  }

  constructor(private _http: HttpClient) { }
  
  async getCountry() {
    this._loader.next(true);
    
    try {
      return await this._http
        .get(`${environment.maatUrl}/misc/flags`, this.headers)
        .toPromise();

    } catch (error) {
      console.log(error)
    }
    this._loader.next(false);

  }

  async getLocation() {
    this._loader.next(true);
    try {
      return await this._http.get(`https://geolocation-db.com/json/`).toPromise();;

    } catch (error) {
      console.log(error)
    }
    this._loader.next(false);
  }
}