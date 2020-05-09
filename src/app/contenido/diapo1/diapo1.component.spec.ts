import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo1Component } from './diapo1.component';

describe('Diapo1Component', () => {
  let component: Diapo1Component;
  let fixture: ComponentFixture<Diapo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
