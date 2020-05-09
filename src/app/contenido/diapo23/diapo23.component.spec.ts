import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo23Component } from './diapo23.component';

describe('Diapo23Component', () => {
  let component: Diapo23Component;
  let fixture: ComponentFixture<Diapo23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
