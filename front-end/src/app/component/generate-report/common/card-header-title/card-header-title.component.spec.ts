import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHeaderTitleComponent } from './card-header-title.component';

describe('CardHeaderTitleComponent', () => {
  let component: CardHeaderTitleComponent;
  let fixture: ComponentFixture<CardHeaderTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHeaderTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardHeaderTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
