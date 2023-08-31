import { Component, OnInit } from "@angular/core";
import AuthService from "src/app/services/auth.service";

@Component({
  selector: "app-confirm-delete",
  templateUrl: "./confirm-delete.component.html",
  styleUrls: ["./confirm-delete.component.css", "../shared.component.css"],
})
export class ConfirmDeleteComponent implements OnInit {
  public selectedOption: string = "";
  public loader: boolean = false;
  private description =
    "Estamos trabajando para que más empresas e instituciones acepten los documentos almacenados en nuestra plataforma. También para que puedas subir más documentos y compartirlos con otras personas, no sólo con empresas.";
  public options = [
    {
      label: "No la uso",
      value: "dont_use",
      description: this.description,
    },
    {
      label: "No le entiendo",
      value: "dont_understand",
      description: this.description,
    },
    {
      label: "No confío en maat.ai",
      value: "dont_trust",
      description: this.description,
    },
    {
      label: "Tuve una mala experiencia",
      value: "bad_experience",
      description: this.description,
    },
    { label: "Otra", value: "other_input", description: "", withInput: true },
  ];

  constructor(private _authService: AuthService) {}

  ngOnInit() {
    this._authService.loader.subscribe((state: boolean) => {
      this.loader = state;
    });
  }

  async submit() {
    await this._authService.deleteUser(this.selectedOption);
  }
}
