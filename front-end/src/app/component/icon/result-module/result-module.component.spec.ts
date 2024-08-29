import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultModuleComponent } from './result-module.component';

describe('ResultModuleComponent', () => {
  let component: ResultModuleComponent;
  let fixture: ComponentFixture<ResultModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
