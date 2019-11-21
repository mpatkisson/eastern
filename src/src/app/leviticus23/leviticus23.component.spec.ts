import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Leviticus23Component } from './leviticus23.component';

describe('Leviticus23Component', () => {
  let component: Leviticus23Component;
  let fixture: ComponentFixture<Leviticus23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Leviticus23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Leviticus23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
