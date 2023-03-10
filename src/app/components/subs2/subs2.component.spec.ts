import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subs2Component } from './subs2.component';

describe('Subs2Component', () => {
  let component: Subs2Component;
  let fixture: ComponentFixture<Subs2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subs2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
