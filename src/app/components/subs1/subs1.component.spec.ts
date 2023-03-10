import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subs1Component } from './subs1.component';

describe('Subs1Component', () => {
  let component: Subs1Component;
  let fixture: ComponentFixture<Subs1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subs1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
