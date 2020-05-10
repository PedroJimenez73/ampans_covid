import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo8Component } from './diapo8.component';

describe('Diapo8Component', () => {
  let component: Diapo8Component;
  let fixture: ComponentFixture<Diapo8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
