import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenCommandmentsComponent } from './ten-commandments.component';

describe('TenCommandmentsComponent', () => {
  let component: TenCommandmentsComponent;
  let fixture: ComponentFixture<TenCommandmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenCommandmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenCommandmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
