import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace',
  standalone: true
})
// Pipe pour remplacer les noms des PF, les types de reviews, et les résultats upsource sonar 
export class ReplacePipe implements PipeTransform {
  transform(value:string):string{
    if(value=="AIX_ENGIE_PF"){return "PF-ENGIE"}
    if(value=="AIX_SICS_PF_DEV"){return "PF-SICS"}
    if(value=="AIX_SICSD_PF_DEV"){return "PF-SICSD"}

    if(value=="KO"){return "FAILURE"}
    if(value=="OK" ||value=="_OK_"){return "SUCCESS"}

    return value;
  }
  


}
