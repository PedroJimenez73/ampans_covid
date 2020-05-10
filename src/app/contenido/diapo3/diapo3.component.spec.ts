import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo3Component } from './diapo3.component';

describe('Diapo3Component', () => {
  let component: Diapo3Component;
  let fixture: ComponentFixture<Diapo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
