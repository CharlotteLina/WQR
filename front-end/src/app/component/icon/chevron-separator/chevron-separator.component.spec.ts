import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevronSeparatorComponent } from './chevron-separator.component';

describe('ChevronSeparatorComponent', () => {
  let component: ChevronSeparatorComponent;
  let fixture: ComponentFixture<ChevronSeparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChevronSeparatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChevronSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
