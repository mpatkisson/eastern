import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Genisis1and2Component } from './genisis1and2.component';

describe('Genisis1and2Component', () => {
  let component: Genisis1and2Component;
  let fixture: ComponentFixture<Genisis1and2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Genisis1and2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Genisis1and2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
