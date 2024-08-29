import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutRepoName',
  standalone: true
})
export class CutRepoNamePipe implements PipeTransform {


  transform(value: string): string {
    let result =value.split("/");
    return result[result.length-1]
  }
}
