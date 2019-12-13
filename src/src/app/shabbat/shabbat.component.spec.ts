import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShabbatComponent } from './shabbat.component';

describe('ShabbatComponent', () => {
  let component: ShabbatComponent;
  let fixture: ComponentFixture<ShabbatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShabbatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShabbatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
