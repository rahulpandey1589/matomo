import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tracker3Component } from './tracker3.component';

describe('Tracker3Component', () => {
  let component: Tracker3Component;
  let fixture: ComponentFixture<Tracker3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tracker3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tracker3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
