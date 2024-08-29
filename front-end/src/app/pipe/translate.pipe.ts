import { Pipe, PipeTransform } from '@angular/core';

import * as fr from '../environments/language/wqr_fr.json';
import * as en from '../environments/language/wqr_en.json';

@Pipe({
  name: 'translate',
  standalone: true
})
export class TranslatePipe implements PipeTransform {
  title = 'json-read-example';
  dataFrench: any=fr;
  dataEnglish: any=en;

  transform(value: string): string {
    if (typeof localStorage !== 'undefined') {
      let language = localStorage.getItem("language")!=null?localStorage.getItem("language"):""
      if(language=="FR"){
        return this.dataFrench[value]
      }else{
        return this.dataEnglish[value];
      }
    }else{
        return this.dataEnglish[value];
    }


  }

}
