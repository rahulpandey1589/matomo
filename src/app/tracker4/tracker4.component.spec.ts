import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tracker4Component } from './tracker4.component';

describe('Tracker4Component', () => {
  let component: Tracker4Component;
  let fixture: ComponentFixture<Tracker4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tracker4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tracker4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
