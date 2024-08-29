import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitMergeComponent } from './git-merge.component';

describe('GitMergeComponent', () => {
  let component: GitMergeComponent;
  let fixture: ComponentFixture<GitMergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitMergeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GitMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
