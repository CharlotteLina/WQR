import { GetJenkinsJobPipe } from './get-jenkins-job.pipe';

describe('GetJenkinsJobPipe', () => {
  it('create an instance', () => {
    const pipe = new GetJenkinsJobPipe();
    expect(pipe).toBeTruthy();
  });
});
