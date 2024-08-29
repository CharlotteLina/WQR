import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateReportDisplayDeployComponent } from './generate-report-display-deploy.component';

describe('GenerateReportDisplayDeployComponent', () => {
  let component: GenerateReportDisplayDeployComponent;
  let fixture: ComponentFixture<GenerateReportDisplayDeployComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateReportDisplayDeployComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateReportDisplayDeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
