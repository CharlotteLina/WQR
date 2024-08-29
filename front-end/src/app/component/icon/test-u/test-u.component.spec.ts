import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUComponent } from './test-u.component';

describe('TestUComponent', () => {
  let component: TestUComponent;
  let fixture: ComponentFixture<TestUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestUComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
