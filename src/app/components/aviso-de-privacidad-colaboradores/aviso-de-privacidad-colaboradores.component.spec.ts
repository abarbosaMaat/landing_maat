import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoDePrivacidadColaboradoresComponent } from './aviso-de-privacidad-colaboradores.component';

describe('AvisoDePrivacidadColaboradoresComponent', () => {
  let component: AvisoDePrivacidadColaboradoresComponent;
  let fixture: ComponentFixture<AvisoDePrivacidadColaboradoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisoDePrivacidadColaboradoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisoDePrivacidadColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
