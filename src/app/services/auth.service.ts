import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { BehaviorSubject, throwError } from "rxjs";
import { environment } from "../../environments/environment";
import { LoginBody, Body2fa, Body2faValid } from "../models/login.model";
import LocalStorageService from "./localstorage.service";

@Injectable({
  providedIn: "root",
})

/**
 * Servicio para gestionar acceso de usuario
 *
 * @export
 * @class AuthService
 */
export default class AuthService {
  public currentUser2fAuth: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  private _loader = new BehaviorSubject<boolean>(false);
  public loader = this._loader.asObservable();
  private _isLoggedIn = new BehaviorSubject<boolean>(this.checkLoginStatus());
  public isLoggedIn$ = this._isLoggedIn.asObservable();
  private _require2fAuth = new BehaviorSubject<boolean>(this.check2FatokenStatus());
  public require2fAuth$ = this._require2fAuth.asObservable();
  private _error = new BehaviorSubject<string>("");
  public error = this._error.asObservable();

  private _endProcess = new BehaviorSubject<boolean>(this.checkEndStatus());
  public endProcess = this._endProcess.asObservable();

  constructor(
    private _http: HttpClient,
    private _localStaroge: LocalStorageService,
  ) {}

  private checkLoginStatus(): boolean {
    const logged = this._localStaroge.getItem<string>("user");
    return !!logged;
  }

  private check2FatokenStatus(): boolean {
    const fa_token = this._localStaroge.getItem<string>("2fa_token");
    return !!fa_token;
  }

  private checkEndStatus(): boolean {
    const end_process = this._localStaroge.getItem<string>("end_process");
    return !!end_process;
  }

  // private headers(token?: string) {
  private headers(token?: string) {
    return {
      withCredentials: false,
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "x-api-key": "12345",
        service: "landing",
        Authorization: token ? `Bearer ${token}` : "",
      }),
    };
  }

  /**
   * @description Método para validar acceso a maatai
   * @param {LoginBody} credentials Body de la petición que debe contener las credenciales del usuario.
   *
   * @memberOf signIn
   */
  async signIn(credentials: LoginBody) {
    this._loader.next(true);
    try {
      const response: any = await this._http
        .post(
          `${environment.maatUrl}/auth/attempt/credentials`,
          credentials,
          this.headers()
        )
        .toPromise();

      if (response.data["2fa_token"]) {
        this._localStaroge.setItem("2fa_token", response.data["2fa_token"]);
        this._require2fAuth.next(true);
      } else {
        this._localStaroge.setItem("user", response.data);
        this._isLoggedIn.next(true);
      }
    } catch (error) {
      this.handleError(error);
    }
    this._loader.next(false);
  }

  async sendCode(body: Body2fa) {
    this._loader.next(true);
    try {
      const response: any = await this._http
        .post(`${environment.maatUrl}/auth/sms/send`, body, this.headers())
        .toPromise();
    } catch (error) {
      this.handleError(error);
    }
    this._loader.next(false);
  }

  async confirmCode(body: Body2faValid) {
    this._loader.next(true);
    try {
      const response: any = await this._http
        .post(`${environment.maatUrl}/auth/attempt/2fa`, body, this.headers())
        .toPromise();

      if (response) {
        this._localStaroge.setItem("user", response.data);
        this._isLoggedIn.next(true);
      }
    } catch (error) {
      this.handleError(error);
    }
    this._loader.next(false);
  }

  async deleteUser(state: string) {
    this._loader.next(true);

    try {
      const user: any = this._localStaroge.getItem<string>("user");
      const accessToken = user.access_token
        ? user.access_token
        : user.user.token.access_token;

      const response: any = await this._http
        .delete(
          `${environment.maatUrl}/user`,
          this.headers(accessToken)
        )
        .toPromise();

      if (response) {
        this._endProcess.next(!!state);
        this._localStaroge.clearAll();
        this._localStaroge.setItem("end_process", state);
      }
    } catch (error) {
      this.handleError(error);
    }
    this._loader.next(false);
  }

  async leaveReason(body: any) {
    this._loader.next(true);
    
    try {
      const user: any = this._localStaroge.getItem<string>("user");
      const accessToken = user.access_token
        ? user.access_token
        : user.user.token.access_token;
      const response: any = await this._http
        .post(`${environment.maatUrl}/user/leave-reason`, body, this.headers(accessToken))
        .toPromise();

    } catch (error) {
      this.handleError(error);
    }
    this._loader.next(false);
  }

  private handleError(error: HttpErrorResponse) {
    console.error(
      error.status === 0
        ? `An error occurred: ${error.error.message}`
        : `Backend returned code ${error.status}, body was: ${error.error.message}`
    );
    this._error.next(error.error.message);
    return throwError(new Error("Something went wrong. Please try again!"));
  }

  cancelProcess(state: string) {
    this._endProcess.next(!!state);
    this._localStaroge.clearAll();
    this._localStaroge.setItem("end_process", state);
  }
}
