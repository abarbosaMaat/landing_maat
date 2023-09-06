import { Component, OnInit, OnDestroy } from "@angular/core";
import { LoginDataResponse } from "../../../models/login.model";
import AuthService from "../../../services/auth.service";
import LocalStorageService from "../../../services/localstorage.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { timer, Subscription } from "rxjs";
import { takeWhile, tap } from "rxjs/operators";

@Component({
  selector: "app-verification-code",
  templateUrl: "./verification-code.component.html",
  styleUrls: ["../shared.component.css", "./verification-code.component.css"],
})
export class VerificationCodeComponent implements OnInit, OnDestroy {
  public userData?: LoginDataResponse;
  public form2fa: FormGroup;
  public submitError: string = "";
  public phone: string = "";
  public resend: boolean = false;
  public loader: boolean = false;
  public countdown: number = 5;
  public countdownSubscription?: Subscription;

  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private _localStaroge: LocalStorageService
  ) {
    this.form2fa = this.fb.group({
      verificationCode: [
        "",
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
    });
  }

  ngOnInit() {
    this.phone = this._localStaroge.getItem<string>("phone");
    this.startCountdown();
    this._authService.loader.subscribe((state: boolean) => {
      this.loader = state;
    });
  }

  ngOnDestroy() {
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }
  }

  get verificationCode() {
    return this.form2fa.controls.verificationCode;
  }

  public async submitVerificationCode() {
    const { verificationCode } = this.form2fa.value;
    if (this.form2fa.valid) {
      const token = this._localStaroge.getItem<string>("2fa_token");
      const body = {
        verification_code: verificationCode,
        "2fa_token": token,
      };
      await this._authService.confirmCode(body);
    }
  }

  public async resendSMS() {
    this.startCountdown();
    const phoneSplit = this.phone.split(" ");
    const body = {
      country_code: phoneSplit[0],
      lang: "es",
      phone: phoneSplit[1],
      type_message: "sms",
    };
    await this._authService.sendCode(body);
  }

  public startCountdown() {
    this.resend = false;
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }

    this.countdown = 5;

    const countdownTimer$ = timer(0, 1000).pipe(
      takeWhile(() => this.countdown > 0),
      tap(() => this.countdown--)
    );

    this.countdownSubscription = countdownTimer$.subscribe({
      complete: () => {
        this.resend = true;
      },
    });
  }
}
