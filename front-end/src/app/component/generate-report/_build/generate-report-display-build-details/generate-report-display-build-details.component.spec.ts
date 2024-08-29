import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateReportDisplayBuildDetailsComponent } from './generate-report-display-build-details.component';

describe('GenerateReportDisplayBuildDetailsComponent', () => {
  let component: GenerateReportDisplayBuildDetailsComponent;
  let fixture: ComponentFixture<GenerateReportDisplayBuildDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateReportDisplayBuildDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateReportDisplayBuildDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
