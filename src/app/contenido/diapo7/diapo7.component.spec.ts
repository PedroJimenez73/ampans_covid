import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo7Component } from './diapo7.component';

describe('Diapo7Component', () => {
  let component: Diapo7Component;
  let fixture: ComponentFixture<Diapo7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
