import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViewLastProductComponent } from './card-view-last-product.component';

describe('CardViewLastProductComponent', () => {
  let component: CardViewLastProductComponent;
  let fixture: ComponentFixture<CardViewLastProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardViewLastProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardViewLastProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
