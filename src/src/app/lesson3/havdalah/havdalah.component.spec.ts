import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HavdalahComponent } from './havdalah.component';

describe('HavdalahComponent', () => {
  let component: HavdalahComponent;
  let fixture: ComponentFixture<HavdalahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HavdalahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HavdalahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
