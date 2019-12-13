import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheTribeComponent } from './the-tribe.component';

describe('TheTribeComponent', () => {
  let component: TheTribeComponent;
  let fixture: ComponentFixture<TheTribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheTribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheTribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
