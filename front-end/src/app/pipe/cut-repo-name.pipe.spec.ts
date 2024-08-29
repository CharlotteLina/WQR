import { CutRepoNamePipe } from './cut-repo-name.pipe';

describe('CutRepoNamePipe', () => {
  it('create an instance', () => {
    const pipe = new CutRepoNamePipe();
    expect(pipe).toBeTruthy();
  });
});
