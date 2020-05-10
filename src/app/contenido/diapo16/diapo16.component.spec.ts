import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo16Component } from './diapo16.component';

describe('Diapo16Component', () => {
  let component: Diapo16Component;
  let fixture: ComponentFixture<Diapo16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
