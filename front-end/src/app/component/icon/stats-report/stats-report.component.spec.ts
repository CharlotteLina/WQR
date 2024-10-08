import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsReportComponent } from './stats-report.component';

describe('StatsReportComponent', () => {
  let component: StatsReportComponent;
  let fixture: ComponentFixture<StatsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
