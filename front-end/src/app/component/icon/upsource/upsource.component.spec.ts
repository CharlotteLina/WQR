import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsourceComponent } from './upsource.component';

describe('UpsourceComponent', () => {
  let component: UpsourceComponent;
  let fixture: ComponentFixture<UpsourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpsourceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpsourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
