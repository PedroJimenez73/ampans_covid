import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Diapo13bisComponent } from './diapo13bis.component';

describe('Diapo13bisComponent', () => {
  let component: Diapo13bisComponent;
  let fixture: ComponentFixture<Diapo13bisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Diapo13bisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Diapo13bisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
