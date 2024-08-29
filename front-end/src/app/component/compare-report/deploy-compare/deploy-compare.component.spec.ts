import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeployCompareComponent } from './deploy-compare.component';

describe('DeployCompareComponent', () => {
  let component: DeployCompareComponent;
  let fixture: ComponentFixture<DeployCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeployCompareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeployCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
