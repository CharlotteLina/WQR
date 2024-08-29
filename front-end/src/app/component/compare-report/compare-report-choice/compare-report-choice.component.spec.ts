import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareReportChoiceComponent } from './compare-report-choice.component';

describe('CompareReportChoiceComponent', () => {
  let component: CompareReportChoiceComponent;
  let fixture: ComponentFixture<CompareReportChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompareReportChoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompareReportChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
