import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RabbinicalAssemblyComponent } from './rabbinical-assembly.component';

describe('RabbinicalAssemblyComponent', () => {
  let component: RabbinicalAssemblyComponent;
  let fixture: ComponentFixture<RabbinicalAssemblyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RabbinicalAssemblyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RabbinicalAssemblyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
