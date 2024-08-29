import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSonarComponent } from './logo-sonar.component';

describe('LogoSonarComponent', () => {
  let component: LogoSonarComponent;
  let fixture: ComponentFixture<LogoSonarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoSonarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoSonarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
