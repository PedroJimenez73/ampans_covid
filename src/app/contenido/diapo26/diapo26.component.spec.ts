import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo26Component } from './diapo26.component';

describe('Diapo26Component', () => {
  let component: Diapo26Component;
  let fixture: ComponentFixture<Diapo26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
