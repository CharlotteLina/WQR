import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateReportDisplayBuildSmallComponent } from './generate-report-display-build-small.component';

describe('GenerateReportDisplayBuildSmallComponent', () => {
  let component: GenerateReportDisplayBuildSmallComponent;
  let fixture: ComponentFixture<GenerateReportDisplayBuildSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateReportDisplayBuildSmallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateReportDisplayBuildSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
