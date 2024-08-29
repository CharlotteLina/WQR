import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowUnionVerticalComponent } from './arrow-union-vertical.component';

describe('ArrowUnionVerticalComponent', () => {
  let component: ArrowUnionVerticalComponent;
  let fixture: ComponentFixture<ArrowUnionVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowUnionVerticalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrowUnionVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
