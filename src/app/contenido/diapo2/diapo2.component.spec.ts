import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo2Component } from './diapo2.component';

describe('Diapo2Component', () => {
  let component: Diapo2Component;
  let fixture: ComponentFixture<Diapo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
