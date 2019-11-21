import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuthComponent } from './ruth.component';

describe('RuthComponent', () => {
  let component: RuthComponent;
  let fixture: ComponentFixture<RuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
