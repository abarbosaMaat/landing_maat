import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginDataResponse, LoginBody, Login2fa } from '../../models/login.model';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private initialUserData = {
    data: {},
    message: "",
    success: false,
  }

  private loginUrl = environment.maatUrl+'/auth/attempt/credentials';
  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUser2fAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<LoginDataResponse> = new BehaviorSubject<LoginDataResponse>(this.initialUserData);

  constructor(private http: HttpClient) { }
  
  login(credentials: LoginBody):Observable<LoginDataResponse> {
    const headerOptions = {
      withCredentials: false,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-api-key': '12345',
      }),
    };
    
    return this.http.post<LoginDataResponse>(this.loginUrl, credentials, headerOptions).pipe(
      tap( (userData: LoginDataResponse) => {
        console.log("userData", userData)
        const twoFactToken = userData.data['2fa_token'];
        
        this.currentUserData.next(userData);

        if (twoFactToken) {
          console.log('tenemos 2fa')
          this.currentUser2fAuth.next(true);
        } else {
          console.log('login directo')
          this.currentUserLoginOn.next(true);
        }
      }),
      catchError(this.handleError)
    );
  }

  login2fa(credentials: Login2fa):Observable<LoginDataResponse> {
    const headerOptions = {
      withCredentials: false,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-api-key': '12345',
      }),
    };

    return this.http.post<LoginDataResponse>(this.loginUrl, credentials, headerOptions).pipe(
      tap( (userData: LoginDataResponse) => {   
        console.log('desde login3fa', userData)     
        this.currentUserData.next(userData);
        this.currentUserLoginOn.next(true);
        
      }),
      catchError(this.handleError)
    );
  }

  // ERRORS
  private handleError(error:HttpErrorResponse) {
    if(error.status === 0) {
      console.error(`Se ha producido un error ${error.error}`);
    } else {
      console.error(`El backend retorno el código de estado: ${error.status}, ${error.error}`);
    }
    return throwError(new Error('Algo salio mal. Intenta nuevamente!'));
  }

  get userData():Observable<LoginDataResponse>{
    return this.currentUserData.asObservable();
  }
  
  get userLoginOn():Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }
  
  get user2fAuth():Observable<boolean>{
    return this.currentUser2fAuth.asObservable();
  }
  
}
