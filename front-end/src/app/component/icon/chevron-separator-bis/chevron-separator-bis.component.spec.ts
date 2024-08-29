import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevronSeparatorBisComponent } from './chevron-separator-bis.component';

describe('ChevronSeparatorBisComponent', () => {
  let component: ChevronSeparatorBisComponent;
  let fixture: ComponentFixture<ChevronSeparatorBisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChevronSeparatorBisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChevronSeparatorBisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
