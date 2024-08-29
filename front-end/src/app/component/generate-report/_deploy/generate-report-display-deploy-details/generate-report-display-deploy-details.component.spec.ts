import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateReportDisplayDeployDetailsComponent } from './generate-report-display-deploy-details.component';

describe('GenerateReportDisplayDeployDetailsComponent', () => {
  let component: GenerateReportDisplayDeployDetailsComponent;
  let fixture: ComponentFixture<GenerateReportDisplayDeployDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateReportDisplayDeployDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateReportDisplayDeployDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
