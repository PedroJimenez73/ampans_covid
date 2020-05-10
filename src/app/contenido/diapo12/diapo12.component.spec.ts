import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo12Component } from './diapo12.component';

describe('Diapo12Component', () => {
  let component: Diapo12Component;
  let fixture: ComponentFixture<Diapo12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
