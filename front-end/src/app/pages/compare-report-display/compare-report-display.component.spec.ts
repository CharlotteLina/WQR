import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareReportDisplayComponent } from './compare-report-display.component';

describe('CompareReportDisplayComponent', () => {
  let component: CompareReportDisplayComponent;
  let fixture: ComponentFixture<CompareReportDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompareReportDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompareReportDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
