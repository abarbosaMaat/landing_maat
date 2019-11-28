import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaDeCumplimientoComponent } from './politica-de-cumplimiento.component';

describe('PoliticaDeCumplimientoComponent', () => {
  let component: PoliticaDeCumplimientoComponent;
  let fixture: ComponentFixture<PoliticaDeCumplimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticaDeCumplimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticaDeCumplimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
