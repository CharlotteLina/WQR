import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbrGlobalComponent } from './nbr-global.component';

describe('NbrGlobalComponent', () => {
  let component: NbrGlobalComponent;
  let fixture: ComponentFixture<NbrGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbrGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NbrGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
