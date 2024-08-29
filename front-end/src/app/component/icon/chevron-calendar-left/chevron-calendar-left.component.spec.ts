import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevronCalendarLeftComponent } from './chevron-calendar-left.component';

describe('ChevronCalendarLeftComponent', () => {
  let component: ChevronCalendarLeftComponent;
  let fixture: ComponentFixture<ChevronCalendarLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChevronCalendarLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChevronCalendarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
