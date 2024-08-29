import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split',
  standalone: true
})
//Pipe pour découper en fonction d'une valeur et retourné le dernier élément 
export class SplitPipe implements PipeTransform {

  transform(value: string, valueToSplit:string): string {
    let result = value.split(valueToSplit)
    return `${result[result.length-1]}`;
  }

}
