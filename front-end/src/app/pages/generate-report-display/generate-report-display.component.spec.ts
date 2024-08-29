import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateReportDisplayComponent } from './generate-report-display.component';

describe('GenerateReportDisplayComponent', () => {
  let component: GenerateReportDisplayComponent;
  let fixture: ComponentFixture<GenerateReportDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateReportDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateReportDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
