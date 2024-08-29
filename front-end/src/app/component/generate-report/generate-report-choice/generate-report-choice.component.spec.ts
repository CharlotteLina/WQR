import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateReportChoiceComponent } from './generate-report-choice.component';

describe('GenerateReportChoiceComponent', () => {
  let component: GenerateReportChoiceComponent;
  let fixture: ComponentFixture<GenerateReportChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateReportChoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateReportChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
