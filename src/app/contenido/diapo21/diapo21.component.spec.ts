import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo21Component } from './diapo21.component';

describe('Diapo21Component', () => {
  let component: Diapo21Component;
  let fixture: ComponentFixture<Diapo21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
