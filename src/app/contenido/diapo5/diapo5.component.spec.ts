import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo5Component } from './diapo5.component';

describe('Diapo5Component', () => {
  let component: Diapo5Component;
  let fixture: ComponentFixture<Diapo5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
