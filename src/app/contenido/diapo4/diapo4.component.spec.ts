import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo4Component } from './diapo4.component';

describe('Diapo4Component', () => {
  let component: Diapo4Component;
  let fixture: ComponentFixture<Diapo4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
