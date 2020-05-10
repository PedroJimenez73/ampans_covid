import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo15Component } from './diapo15.component';

describe('Diapo15Component', () => {
  let component: Diapo15Component;
  let fixture: ComponentFixture<Diapo15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
