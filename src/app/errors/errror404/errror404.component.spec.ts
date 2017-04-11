import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Errror404Component } from './errror404.component';

describe('Errror404Component', () => {
  let component: Errror404Component;
  let fixture: ComponentFixture<Errror404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Errror404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Errror404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
