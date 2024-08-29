import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowSeparateVerticalComponent } from './arrow-separate-vertical.component';

describe('ArrowSeparateVerticalComponent', () => {
  let component: ArrowSeparateVerticalComponent;
  let fixture: ComponentFixture<ArrowSeparateVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowSeparateVerticalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrowSeparateVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
