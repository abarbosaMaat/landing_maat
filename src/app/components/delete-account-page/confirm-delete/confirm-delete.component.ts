import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css', '../shared.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  selectedOption: string | null = null;
  password: string = '';
  isPasswordValid: boolean = false;
  options = [
    { label: 'No la uso', value: 'option1', description: 'Estamos trabajando para que más empresas e instituciones acepten los documentos almacenados en nuestra plataforma. También para que puedas subir más documentos y compartirlos con otras personas, no sólo con empresas.' },
    { label: 'No le entiendo', value: 'option2', description: 'Estamos trabajando para que más empresas e instituciones acepten los documentos almacenados en nuestra plataforma. También para que puedas subir más documentos y compartirlos con otras personas, no sólo con empresas.' },
    { label: 'No confío en maat.ai', value: 'option3', description: 'Estamos trabajando para que más empresas e instituciones acepten los documentos almacenados en nuestra plataforma. También para que puedas subir más documentos y compartirlos con otras personas, no sólo con empresas.' },
    { label: 'Tuve una mala experiencia', value: 'option4', description: 'Estamos trabajando para que más empresas e instituciones acepten los documentos almacenados en nuestra plataforma. También para que puedas subir más documentos y compartirlos con otras personas, no sólo con empresas.' },
    { label: 'Otra', value: 'option5', description: '', withInput: true },
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleSection() {
    if (!this.selectedOption) {
      this.selectedOption = this.options[0].value; // Auto-select the first option
    }
  }

  checkPassword() {
    this.isPasswordValid = this.password.length > 0;
  }
}