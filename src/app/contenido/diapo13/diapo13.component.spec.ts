import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo13Component } from './diapo13.component';

describe('Diapo13Component', () => {
  let component: Diapo13Component;
  let fixture: ComponentFixture<Diapo13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
