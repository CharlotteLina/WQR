import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateReportDisplayBuildComponent } from './generate-report-display-build.component';

describe('GenerateReportDisplayBuildComponent', () => {
  let component: GenerateReportDisplayBuildComponent;
  let fixture: ComponentFixture<GenerateReportDisplayBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateReportDisplayBuildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateReportDisplayBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
