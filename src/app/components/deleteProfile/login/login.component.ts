import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public loginForm!:FormGroup;

  // constructor() {
  constructor(private fb:FormBuilder, private service:SharedService) { }

  ngOnInit(): void {
    this.loginForm = this.createLoginForm();
    // this.service.getCountryCode().subscribe((data: any[]) => {
    //   // Aquí puedes manejar los datos obtenidos del servicio
    //   // data es el resultado devuelto por el servicio
    //   console.log("data", data);
    // });
  }

  private createLoginForm():FormGroup {
    return this.fb.group({
      phone: '',
      countryCode: '',
      password: ''
    });
  }

  public submitLoginForm(){
    const {phone, countryCode, password} = this.loginForm.value
    alert('se envia el form');
    const phoneNumber = countryCode + phone;
    console.log(`Teléfono: ${phoneNumber}, Contraseña: ${password}`);
  }

}
