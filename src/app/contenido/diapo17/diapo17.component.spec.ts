import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo17Component } from './diapo17.component';

describe('Diapo17Component', () => {
  let component: Diapo17Component;
  let fixture: ComponentFixture<Diapo17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
