import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitBranchComponent } from './git-branch.component';

describe('GitBranchComponent', () => {
  let component: GitBranchComponent;
  let fixture: ComponentFixture<GitBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitBranchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GitBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
