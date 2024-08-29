import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateReportDisplayBuildProductComponent } from './generate-report-display-build-product.component';

describe('GenerateReportDisplayBuildProductComponent', () => {
  let component: GenerateReportDisplayBuildProductComponent;
  let fixture: ComponentFixture<GenerateReportDisplayBuildProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateReportDisplayBuildProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateReportDisplayBuildProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
