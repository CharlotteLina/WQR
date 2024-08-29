import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTitleSmallComponent } from './card-title-small.component';

describe('CardTitleSmallComponent', () => {
  let component: CardTitleSmallComponent;
  let fixture: ComponentFixture<CardTitleSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTitleSmallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardTitleSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
