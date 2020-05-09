import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo19Component } from './diapo19.component';

describe('Diapo19Component', () => {
  let component: Diapo19Component;
  let fixture: ComponentFixture<Diapo19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
