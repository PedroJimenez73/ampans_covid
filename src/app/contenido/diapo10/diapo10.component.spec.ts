import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo10Component } from './diapo10.component';

describe('Diapo10Component', () => {
  let component: Diapo10Component;
  let fixture: ComponentFixture<Diapo10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
