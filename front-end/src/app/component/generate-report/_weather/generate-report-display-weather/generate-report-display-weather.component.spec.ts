import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateReportDisplayWeatherComponent } from './generate-report-display-weather.component';

describe('GenerateReportDisplayWeatherComponent', () => {
  let component: GenerateReportDisplayWeatherComponent;
  let fixture: ComponentFixture<GenerateReportDisplayWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateReportDisplayWeatherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateReportDisplayWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
