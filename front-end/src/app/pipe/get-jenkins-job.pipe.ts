import { Pipe, PipeTransform } from '@angular/core';
import { DeployPFDetails } from '../models/report/DeployPF/deployPFDetails';

@Pipe({
  name: 'getJenkinsJob',
  standalone: true
})
export class GetJenkinsJobPipe implements PipeTransform {

  jenkinsUrl:string="http://jenkins.sics/job/"

  transform(name:string,jenkinsNumber:string): string {
    let url = this.jenkinsUrl;
    if(name){
      url += name+"/"
      if(jenkinsNumber){
        url += jenkinsNumber
      }
    }
  
    return url;
  }

}
