import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlephbetComponent } from './alephbet.component';

describe('AlephbetComponent', () => {
  let component: AlephbetComponent;
  let fixture: ComponentFixture<AlephbetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlephbetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlephbetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
