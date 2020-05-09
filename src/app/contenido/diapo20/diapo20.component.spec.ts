import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo20Component } from './diapo20.component';

describe('Diapo20Component', () => {
  let component: Diapo20Component;
  let fixture: ComponentFixture<Diapo20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
