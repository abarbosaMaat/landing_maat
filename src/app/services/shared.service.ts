import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  
  constructor(private http: HttpClient) { }
  
  getCountryCode():Observable<any[]> {
    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('x-api-key', 'hola');
    
    return this.http.get<any>(`https://maat-api-ykdgcrhh2a-uc.a.run.app/api/v4/misc/flags`, {headers})
  }
}
