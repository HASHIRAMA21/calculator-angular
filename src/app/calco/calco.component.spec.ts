import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcoComponent } from './calco.component';

describe('CalcoComponent', () => {
  let component: CalcoComponent;
  let fixture: ComponentFixture<CalcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
