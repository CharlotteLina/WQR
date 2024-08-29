import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCircleAltComponent } from './user-circle-alt.component';

describe('UserCircleAltComponent', () => {
  let component: UserCircleAltComponent;
  let fixture: ComponentFixture<UserCircleAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCircleAltComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserCircleAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
