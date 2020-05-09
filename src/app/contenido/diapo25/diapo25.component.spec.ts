import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo25Component } from './diapo25.component';

describe('Diapo25Component', () => {
  let component: Diapo25Component;
  let fixture: ComponentFixture<Diapo25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
