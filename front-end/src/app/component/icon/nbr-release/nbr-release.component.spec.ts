import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbrReleaseComponent } from './nbr-release.component';

describe('NbrReleaseComponent', () => {
  let component: NbrReleaseComponent;
  let fixture: ComponentFixture<NbrReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbrReleaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NbrReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
