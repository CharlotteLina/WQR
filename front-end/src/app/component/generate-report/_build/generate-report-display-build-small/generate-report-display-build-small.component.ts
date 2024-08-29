import { Component, Input, inject } from '@angular/core';
import { Report } from '../../../../models/report/Report';
import { CommonModule, ViewportScroller } from '@angular/common';
import { CardHeaderTitleComponent } from '../../common/card-header-title/card-header-title.component';
import { MatCardModule } from '@angular/material/card';
import { UtilsService } from '../../../../services/utils.service';
import { CutRepoNamePipe } from '../../../../pipe/cut-repo-name.pipe';
import { GenerateReportDisplayBuildDetailsComponent } from '../generate-report-display-build-details/generate-report-display-build-details.component';
import { ReportBuild } from '../../../../models/report/Build/ReportBuild';
import { environment } from '../../../../environments/environment';
import { TranslatePipe } from '../../../../pipe/translate.pipe';
import { env } from 'process';

@Component({
  selector: 'app-generate-report-display-build-small',
  standalone: true,
  imports: [TranslatePipe,CommonModule,CardHeaderTitleComponent,MatCardModule,CutRepoNamePipe,GenerateReportDisplayBuildDetailsComponent],
  templateUrl: './generate-report-display-build-small.component.html',
  styleUrl: './generate-report-display-build-small.component.scss'
})
export class GenerateReportDisplayBuildSmallComponent {


  //Variable d'environnement 
  public environment = environment;

  //Services
  utils:UtilsService = inject(UtilsService);

  // Variable d'entrée 
  @Input() report!:Report;  
  @Input() detail!:String;
  
  // Variables 
  builds!:ReportBuild[];
  result!:String;
  previousResult!:string


  constructor(private viewportScroller: ViewportScroller) {}


  ngOnInit(){
    this.builds = new Array;



    if(this.detail==environment.compilation){
      this.result = this.report.currentResult.compilationResult;
      // this.previousResult = this.report.previousResult.compilationResult
    }
    if(this.detail==environment.unitTest){
      this.result = this.report.currentResult.testResult;
      // this.previousResult = this.report.previousResult.testResult
    }
    if(this.detail==environment.sonar){
      this.result = this.report.currentResult.sonarResult;
      // this.previousResult = this.report.previousResult.sonarResult
    }
    if(this.detail==environment.upsource){
      this.result = this.report.currentResult.upsourceResult;
      // this.previousResult = this.report.previousResult.upsourceResult
    }

    // this.builds=this.report.builds
    this.initOnDetail()
  }


  initOnDetail(){
    this.report.builds.forEach(b=>{
      if(this.detail==environment.upsource && b.resultUpsource!=environment.success && b.resultUpsource!=environment.ok && b.resultUpsource!=environment.na){
        this.builds.push(b)
      }
      if(this.detail==environment.unitTest && b.resultTU!=environment.success && b.resultTU!=environment.unknown){
        this.builds.push(b)
      }
      if(this.detail==environment.sonar && b.resultSonar!=environment.ok && b.resultSonar!='_'+environment.ok+'_' && b.resultSonar!=environment.na && b.resultSonar!=environment.notanalyzed && b.resultSonar!=environment.unknown){
        this.builds.push(b)
      }
  })



  }

  navigateToAnchor(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }

}
