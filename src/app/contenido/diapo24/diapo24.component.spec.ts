import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo24Component } from './diapo24.component';

describe('Diapo24Component', () => {
  let component: Diapo24Component;
  let fixture: ComponentFixture<Diapo24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
