import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo11Component } from './diapo11.component';

describe('Diapo11Component', () => {
  let component: Diapo11Component;
  let fixture: ComponentFixture<Diapo11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
