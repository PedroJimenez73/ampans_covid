import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo22Component } from './diapo22.component';

describe('Diapo22Component', () => {
  let component: Diapo22Component;
  let fixture: ComponentFixture<Diapo22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
