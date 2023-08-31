import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { LoginService } from '../../services/auth/login.service';


@Component({
  selector: 'app-desuscribirse',
  templateUrl: './delete-account-page.component.html',
  styleUrls: ['./delete-account-page.component.css']
})
export class DeleteAccountPage implements OnInit, OnDestroy {

  userLoginOn: boolean = false;
  user2fAuth: boolean = false;

  constructor(private loginService:LoginService) { }

  ngOnDestroy(): void {
    this.loginService.currentUser2fAuth.unsubscribe();
    this.loginService.currentUserLoginOn.unsubscribe();
  }
  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
      }
    })
    this.loginService.currentUser2fAuth.subscribe({
      next: (user2fAuth) => {
        this.user2fAuth = user2fAuth;
      }
    })
    console.log(this.userLoginOn);
    console.log(this.user2fAuth);
  }


}
