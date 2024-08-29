import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevronCalendarRightComponent } from './chevron-calendar-right.component';

describe('ChevronCalendarRightComponent', () => {
  let component: ChevronCalendarRightComponent;
  let fixture: ComponentFixture<ChevronCalendarRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChevronCalendarRightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChevronCalendarRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
