import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Report } from '../../../../models/report/Report';
import { CardHeaderTitleComponent } from '../../common/card-header-title/card-header-title.component';
import { MatCardModule } from '@angular/material/card';
import { UtilsService } from '../../../../services/utils.service';
import { ReplacePipe } from '../../../../pipe/replace.pipe';
import { LevelArrowCircleRightComponent } from '../../../icon/level-arrow-circle-right/level-arrow-circle-right.component';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { TranslatePipe } from '../../../../pipe/translate.pipe';

@Component({
  selector: 'app-generate-report-display-weather',
  standalone: true,
  imports: [CommonModule,CardHeaderTitleComponent,MatCardModule,ReplacePipe,LevelArrowCircleRightComponent,TranslatePipe],
  templateUrl: './generate-report-display-weather.component.html',
  styleUrl: './generate-report-display-weather.component.scss'
})
export class GenerateReportDisplayWeatherComponent {

  // Variable d'environnement 
  public environment = environment;

  // Services
  utils:UtilsService = inject(UtilsService);

  // Variable d'entrée
  @Input() report!:Report;  

  // Variable de sortie
  @Output() navigateReport = new EventEmitter<string>();
  @Output() navigateReportDetail = new EventEmitter<any>();

  // Variables
  result!:string;
  previousResult!:string;

  constructor(private router: Router,private route: ActivatedRoute) {}


  ngOnInit(){
    if(this.report.status==environment.pending){
      this.result = environment.pending
      this.previousResult=environment.unknown
    }else{
      this.result= this.report.currentResult.globalResult
      if(this.report.previousResult!=null){
        this.previousResult = this.report.previousResult.globalResult
      }else{
        this.previousResult=environment.unknown
      }
    }


  }

  navigate(type:string){
    this.navigateReport.emit(type);
  }

  navigateToDetails(type:string,detail:string){
    this.navigateReportDetail.emit([type,detail]);
  }
}


