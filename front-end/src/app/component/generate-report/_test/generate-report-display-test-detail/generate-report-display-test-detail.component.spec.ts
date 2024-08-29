import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateReportDisplayTestDetailComponent } from './generate-report-display-test-detail.component';

describe('GenerateReportDisplayTestDetailComponent', () => {
  let component: GenerateReportDisplayTestDetailComponent;
  let fixture: ComponentFixture<GenerateReportDisplayTestDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateReportDisplayTestDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateReportDisplayTestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
