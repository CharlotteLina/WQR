import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelArrowCircleRightComponent } from './level-arrow-circle-right.component';

describe('LevelArrowCircleRightComponent', () => {
  let component: LevelArrowCircleRightComponent;
  let fixture: ComponentFixture<LevelArrowCircleRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelArrowCircleRightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LevelArrowCircleRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
