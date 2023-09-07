import { Component, OnInit } from "@angular/core";
import AuthService from "src/app/services/auth.service";

@Component({
  selector: "app-desuscribirse",
  templateUrl: "./delete-account-page.component.html",
  styleUrls: ["./delete-account-page.component.css"],
})
export class DeleteAccountPage implements OnInit {

  userLoginOn: boolean = false;
  user2fAuth: boolean = false;
  endProcess: boolean;

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this._authService.isLoggedIn$.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
      },
    });
    this._authService.require2fAuth$.subscribe({
      next: (user2fAuth) => {
        this.user2fAuth = user2fAuth;
      },
    });

    this._authService.endProcess.subscribe((state: boolean) => {
      this.endProcess = state
    }) 
  }

}
