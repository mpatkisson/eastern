import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KashrutComponent } from './kashrut.component';

describe('KashrutComponent', () => {
  let component: KashrutComponent;
  let fixture: ComponentFixture<KashrutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KashrutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KashrutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
