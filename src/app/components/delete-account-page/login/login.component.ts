import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Country, LocationResponse } from '../../../models/country.model';
import { CountryService } from '../../../services/country.service';
import { LoginService } from 'src/app/services/auth/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../shared.component.css'],
})

export class LoginComponent implements OnInit {
  
  userLoginOn: boolean = false;

  public loginForm: FormGroup;
  public loginError: string = "";
  public transformCountries: Country[] = [];
  public currentCountry: Country = {
    phone_code: '',
    emoji: '',
    name_es: '',
    iso_2: ''
  };

  constructor(
    private fb: FormBuilder, 
    private countryService: CountryService,
    private loginService: LoginService,
  ) {

    this.loginForm = this.fb.group({
      password: ["", [Validators.minLength(4), Validators.required]],
      phoneNumber: ["", Validators.required],
    });

    this.getCountriesData();
  }

  ngOnInit(): void {
    this.getCurrentCountry();
  }

  getCountriesData() {
    this.countryService.getCountry().pipe(
      map(response => response.data.countries.map(country => {
          return {
            phone_code: country.phone_code,
            emoji: country.emoji,
            name_es: country.name_es,
            iso_2: country.iso_2
          }
        })),
      map(countries => countries.sort((a, b) => a.name_es.localeCompare(b.name_es)))
    ).subscribe(
      transformedData => this.transformCountries = transformedData,
      error => console.error('Error:', error)
    );
  }

  getCurrentCountry() {
    this.countryService.getLocation().subscribe(
      (data: LocationResponse) => {
        this.currentCountry = this.transformCountries.find(country => country.iso_2 === data.country_code);
        console.log('data', this.currentCountry)
      }
    )
  }

  dropdownValueChanged(selectedValue: any) {
    // Acciones en respuesta al cambio de valor seleccionado.
    this.currentCountry = selectedValue;
    // console.log('Selected value changed:', this.currentCountry);
  }

  // Getter for easy access to form fields
  get phoneNumber() { return this.loginForm.controls.phoneNumber; }
  get password() { return this.loginForm.controls.password; }

  public submitLoginForm(event: Event) {
    event.preventDefault();

    const {phoneNumber, password} = this.loginForm.value
    alert('se envia el form');

    if (this.loginForm.valid) {

      console.log('Form is valid');

      const credentials = {
        country_code: this.arrayBufferToBase64(this.currentCountry.phone_code),
        password: this.arrayBufferToBase64(password),
        phone: this.arrayBufferToBase64(phoneNumber),
        type_message: "sms"
      }

      this.loginService.login(credentials).subscribe({
        next: (response) => {
          // Manejar la respuesta aquí
          console.log("response", response)
          
        },
        error: (errorData) => {
          // Manejar el error aquí
          this.loginError = errorData;
        },
        complete: () => {}
        
      });

    }
    
  }

  arrayBufferToBase64(data: string): string {
    const encoder = new TextEncoder();
    const dataArrayBuffer = encoder.encode(data);
    const binary = String.fromCharCode.apply(null, new Uint8Array(dataArrayBuffer));
    return btoa(binary);
  }
  
  
  
  

}
