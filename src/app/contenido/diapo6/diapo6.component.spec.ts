import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo6Component } from './diapo6.component';

describe('Diapo6Component', () => {
  let component: Diapo6Component;
  let fixture: ComponentFixture<Diapo6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
