import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDateCalendarComponent } from './select-date-calendar.component';

describe('SelectDateCalendarComponent', () => {
  let component: SelectDateCalendarComponent;
  let fixture: ComponentFixture<SelectDateCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectDateCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectDateCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
