import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo18Component } from './diapo18.component';

describe('Diapo18Component', () => {
  let component: Diapo18Component;
  let fixture: ComponentFixture<Diapo18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
