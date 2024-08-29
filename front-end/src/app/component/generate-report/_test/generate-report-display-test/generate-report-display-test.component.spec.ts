import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateReportDisplayTestComponent } from './generate-report-display-test.component';

describe('GenerateReportDisplayTestComponent', () => {
  let component: GenerateReportDisplayTestComponent;
  let fixture: ComponentFixture<GenerateReportDisplayTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateReportDisplayTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateReportDisplayTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
