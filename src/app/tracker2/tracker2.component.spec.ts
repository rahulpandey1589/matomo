import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tracker2Component } from './tracker2.component';

describe('Tracker2Component', () => {
  let component: Tracker2Component;
  let fixture: ComponentFixture<Tracker2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tracker2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tracker2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
