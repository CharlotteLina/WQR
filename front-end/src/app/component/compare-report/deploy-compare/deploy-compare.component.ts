import { Component, Input, inject } from '@angular/core';
import { ReportCompare } from '../../../models/compare/ReportCompare';
import { SplineChartComponent } from '../chart/spline-chart/spline-chart.component';
import { MatIcon } from '@angular/material/icon';
import { Sort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { Branch } from '../../../models/Branch';
import { IndicatorDetail } from '../../../models/compare/IndicatorDetail';
import { UtilsService } from '../../../services/utils.service';
import { DoughnutChartComponent } from '../chart/doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from '../chart/bar-chart-stacked/bar-chart.component';
import { CardTitleComponent } from '../../home/card-title/card-title.component';
import { MatCardModule } from '@angular/material/card';
import { BubbleChartComponent } from '../chart/bubble-chart/bubble-chart.component';
import { ColumnChartComponent } from '../chart/column-chart/column-chart.component';
import { Graph } from '../../../models/compare/Graph';
import { WqrService } from '../../../services/wqr.service';
import { Observable } from 'rxjs';
import { TranslatePipe } from '../../../pipe/translate.pipe';
import { environment } from '../../../environments/environment';
import {type} from "node:os";
import {RouterLink} from "@angular/router";

export interface Branches {
  name: string;
  number:number;
}
@Component({
  selector: 'app-deploy-compare',
  standalone: true,
  imports: [TranslatePipe, BubbleChartComponent, SplineChartComponent, MatIcon, CommonModule, DoughnutChartComponent, BarChartComponent, CardTitleComponent, MatCardModule, ColumnChartComponent, RouterLink],
  templateUrl: './deploy-compare.component.html',
  styleUrl: './deploy-compare.component.scss'
})
export class DeployCompareComponent {

  //Variable d'environnement
  public environment = environment;

  //Variable d'entrée
  @Input() reportCompare!:ReportCompare;
  @Input() product!:string;
  @Input() startDate!:string;
  @Input() endDate!:string;

  //Variables
  utils:UtilsService = inject(UtilsService);
  wqrService:WqrService = inject(WqrService);
  branchDetail$!:Observable<Graph>;
  type!:string;


  ngOnInit(){


    if (!this.reportCompare.graphList || this.reportCompare.graphList.length === 0) {
      console.warn('No graphs available in reportCompare.');
      return;
    }

    this.reportCompare.graphList.forEach(graph =>{
      if(graph.axeXName=="Module"){
        this.changeDeployDetail(graph.dataList[0].dataPoints[0].name)
        console.warn('Graph with axeXName "Module" has no dataList or is empty.');

      }
    })
  }

  //Changement sur les details d'un repository
  changeDeployDetail(e:any){
    this.branchDetail$ = this.wqrService.getACompareReportBrancheDetail(this.startDate,this.endDate,e,this.reportCompare.idBuildProduct.toString())
  }

}
