import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo14Component } from './diapo14.component';

describe('Diapo14Component', () => {
  let component: Diapo14Component;
  let fixture: ComponentFixture<Diapo14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
