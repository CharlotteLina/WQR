import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastArrowRightComponent } from './fast-arrow-right.component';

describe('FastArrowRightComponent', () => {
  let component: FastArrowRightComponent;
  let fixture: ComponentFixture<FastArrowRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FastArrowRightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FastArrowRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
