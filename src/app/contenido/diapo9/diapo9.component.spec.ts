import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo9Component } from './diapo9.component';

describe('Diapo9Component', () => {
  let component: Diapo9Component;
  let fixture: ComponentFixture<Diapo9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
