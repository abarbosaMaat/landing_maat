import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { map } from "rxjs/operators";
import { Country, LocationResponse } from "../../../models/country.model";
import { CountryService } from "../../../services/country.service";
import AuthService from "src/app/services/auth.service";
import LocalStorageService from "src/app/services/localstorage.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css", "../shared.component.css"],
})
export class LoginComponent implements OnInit {
  userLoginOn: boolean = false;
  public loader: boolean = false;

  public loginForm: FormGroup;
  public loginError: string = "";
  public transformCountries: Country[] = [];
  public currentCountry: Country = {
    phone_code: "",
    emoji: "",
    name_es: "",
    iso_2: "",
  };

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService,
    private _authService: AuthService,
    private _localStaroge: LocalStorageService
  ) {
    this.loginForm = this.fb.group({
      password: ["", [Validators.minLength(4), Validators.required]],
      phoneNumber: ["", Validators.required],
    });

    this.getCountriesData();
  }

  ngOnInit(): void {
    this.getCurrentCountry();
    this._authService.loader.subscribe((state: boolean) => {
      this.loader = state;
    });
  }

  getCountriesData() {
    this.countryService
      .getCountry()
      .pipe(
        map((response) =>
          response.data.countries.map((country) => {
            return {
              phone_code: country.phone_code,
              emoji: country.emoji,
              name_es: country.name_es,
              iso_2: country.iso_2,
            };
          })
        ),
        map((countries) =>
          countries.sort((a, b) => a.name_es.localeCompare(b.name_es))
        )
      )
      .subscribe(
        (transformedData) => (this.transformCountries = transformedData),
        (error) => console.error("Error:", error)
      );
  }

  getCurrentCountry() {
    this.countryService.getLocation().subscribe((data: LocationResponse) => {
      this.currentCountry = this.transformCountries.find(
        (country) => country.iso_2 === data.country_code
      );
    });
  }

  dropdownValueChanged(selectedValue: any) {
    // Acciones en respuesta al cambio de valor seleccionado.
    this.currentCountry = selectedValue;
    // console.log('Selected value changed:', this.currentCountry);
  }

  get phoneNumber() {
    return this.loginForm.controls.phoneNumber;
  }
  get password() {
    return this.loginForm.controls.password;
  }

  public async submitLoginForm(event: Event) {
    event.preventDefault();
    const { phoneNumber, password } = this.loginForm.value;
    if (this.loginForm.valid) {
      const credentials = {
        country_code: this.arrayBufferToBase64(this.currentCountry.phone_code),
        password: this.arrayBufferToBase64(password),
        phone: this.arrayBufferToBase64(phoneNumber),
        type_message: "sms",
      };
      this._localStaroge.setItem(
        "phone",
        `${this.currentCountry.phone_code} ${phoneNumber}`
      );
      await this._authService.signIn(credentials);
    }
  }

  arrayBufferToBase64(data: string): string {
    const encoder = new TextEncoder();
    const dataArrayBuffer = encoder.encode(data);
    const binary = String.fromCharCode.apply(
      null,
      new Uint8Array(dataArrayBuffer)
    );
    return btoa(binary);
  }
}
