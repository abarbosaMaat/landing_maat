import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountriesResponse } from '../models/country.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  private flagsUrl = environment.maatUrl+'/misc/flags';
  private locationUrl = 'https://geolocation-db.com/json/';

  constructor(private http: HttpClient) { }
  
  getCountry():Observable<CountriesResponse> {

    const options = {
      withCredentials: false,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-api-key': '12345',
      }),
    };
    
    return this.http.get<CountriesResponse>(this.flagsUrl, options);
  }

  getLocation() {
    return this.http.get(this.locationUrl);
  }
}
