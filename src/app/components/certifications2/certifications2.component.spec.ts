import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Certifications2Component } from './certifications2.component';

describe('CertificationsComponent', () => {
  let component: Certifications2Component;
  let fixture: ComponentFixture<Certifications2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Certifications2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Certifications2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
