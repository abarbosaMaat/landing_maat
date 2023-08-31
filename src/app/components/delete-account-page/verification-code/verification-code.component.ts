import { Component, OnInit } from '@angular/core';
import { LoginDataResponse } from '../../../models/login.model';
import { LoginService } from '../../../services/auth/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['../shared.component.css', './verification-code.component.css']
})
export class VerificationCodeComponent implements OnInit {

  userData?:LoginDataResponse;
  public form2fa: FormGroup;
  public submitError: string = "";

  constructor(
    private fb: FormBuilder, 
    private loginService:LoginService
  ) { 
    this.form2fa = this.fb.group({
      verificationCode: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    this.loginService.currentUserData.subscribe({
      next: (userData) => {
        this.userData = userData;
        console.log("userData 2fa", this.userData)
      }
    })
  }
  get verificationCode() { return this.form2fa.controls.verificationCode; }

  public submitVerificationCode(event: Event) {

    event.preventDefault();

    const { verificationCode } = this.form2fa.value

    if (this.form2fa.valid) {

      console.log('Form is valid');

      const credentials = {
        verification_code: verificationCode,
        '2fa_token': this.userData['2fa_token']
      }

      this.loginService.login2fa(credentials).subscribe({
        next: (response) => {
          console.log("response 2fa", response)
        },
        error: (errorData) => this.submitError = errorData,
        complete: () => {}
      });

    }
    
  }

}
