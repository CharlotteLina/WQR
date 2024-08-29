import { Component, Input, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { UtilsService } from '../../../../services/utils.service';
import { Report } from '../../../../models/report/Report';
import { CardHeaderTitleComponent } from '../../common/card-header-title/card-header-title.component';
import { GenerateReportDisplayDeployDetailsComponent } from '../generate-report-display-deploy-details/generate-report-display-deploy-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ReplacePipe } from '../../../../pipe/replace.pipe';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generate-report-display-deploy',
  standalone: true,
  imports: [CommonModule,MatCardModule,CardHeaderTitleComponent,GenerateReportDisplayDeployDetailsComponent,MatTabsModule,ReplacePipe],
  templateUrl: './generate-report-display-deploy.component.html',
  styleUrl: './generate-report-display-deploy.component.scss'
})
export class GenerateReportDisplayDeployComponent {

  //Variable d'environnement 
  public environment = environment;

  @Input() report!:Report;  
  @Input() test!:string;

  result!:String;
  previousResult!:string

  selectedIndex:string="0";


  constructor(private route: ActivatedRoute) {}


 ngOnInit(){
  this.result = this.report.currentResult.deployResult;
  this.previousResult = this.report.previousResult.deployResult

  let tabs=['Global']
  this.report.deployPF.forEach(d=>{
    tabs.push(d.pfName)
  })
  // Initialisation des tabs de details
  let detail = this.route.snapshot.queryParamMap.get('details')
  if(detail!=null){this.selectedIndex=tabs.indexOf(detail).toString()}

 }
 

  

}
