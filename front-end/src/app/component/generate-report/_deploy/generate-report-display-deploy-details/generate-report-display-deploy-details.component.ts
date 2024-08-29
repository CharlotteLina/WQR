import { Component, Input, inject } from '@angular/core';
import { DeployPF } from '../../../../models/report/DeployPF/deployPF';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ReplacePipe } from '../../../../pipe/replace.pipe';
import { UtilsService } from '../../../../services/utils.service';
import { GetJenkinsJobPipe } from '../../../../pipe/get-jenkins-job.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-generate-report-display-deploy-details',
  standalone: true,
  imports: [CommonModule,MatCardModule,ReplacePipe,GetJenkinsJobPipe,FontAwesomeModule],
  templateUrl: './generate-report-display-deploy-details.component.html',
  styleUrl: './generate-report-display-deploy-details.component.scss'
})
export class GenerateReportDisplayDeployDetailsComponent {

  // Services
  utils:UtilsService = inject(UtilsService);

  // Variable d'entrée 
  @Input() deployPF!:DeployPF;

  // Variable
  displayedColumns: string[] = ['Nom de la PF', 'Résultat', 'Machines','Jenkins'];
  displayedColumnsDetails:string[]=['#','Name','Machines','Cause','Jenkins']
  jenkinsUrl:string=environment.jenkinsUrl
  
    ngOnInit(){

  }

}
