import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleappComponent } from './exampleapp.component';

describe('ExampleappComponent', () => {
  let component: ExampleappComponent;
  let fixture: ComponentFixture<ExampleappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
