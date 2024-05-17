import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tracker1Component } from './tracker1.component';

describe('Tracker1Component', () => {
  let component: Tracker1Component;
  let fixture: ComponentFixture<Tracker1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tracker1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tracker1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
