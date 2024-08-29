import { Component, Input, inject } from '@angular/core';
import { GenerateReportDisplayBuildDetailsComponent } from "../generate-report-display-build-details/generate-report-display-build-details.component";
import { UtilsService } from '../../../../services/utils.service';
import { CommonModule, ViewportScroller } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CardHeaderTitleComponent } from '../../common/card-header-title/card-header-title.component';
import { Report } from '../../../../models/report/Report';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CutRepoNamePipe } from '../../../../pipe/cut-repo-name.pipe';
import { ReplacePipe } from '../../../../pipe/replace.pipe';
import { ReportBuild } from '../../../../models/report/Build/ReportBuild';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { GenerateReportDisplayBuildSmallComponent } from '../generate-report-display-build-small/generate-report-display-build-small.component';
import { environment } from '../../../../environments/environment';
import { TranslatePipe } from '../../../../pipe/translate.pipe';



@Component({
    selector: 'app-generate-report-display-build-product',
    standalone: true,
    templateUrl: './generate-report-display-build-product.component.html',
    styleUrl: './generate-report-display-build-product.component.scss',
    imports: [TranslatePipe,MatSortModule,CommonModule,MatCardModule,CardHeaderTitleComponent,MatButtonModule, MatTableModule,CutRepoNamePipe,GenerateReportDisplayBuildDetailsComponent,ReplacePipe,MatTabsModule,GenerateReportDisplayBuildSmallComponent]
})


export class GenerateReportDisplayBuildProductComponent {
  

  //Variable d'environnement 
  public environment = environment;

  // Services
  utils:UtilsService = inject(UtilsService);

  //Variable d'entrée
  @Input() report!:Report;  
  @Input() parent!:string;
  @Input() component!:boolean;
  @Input ()selectedIndex!:string;

  //Variables
  result!:string;
  previousResult!:string;
  builds!:ReportBuild[];
  role:string="";

  displayedColumns: string[] = [environment.nameCol, environment.compilationCol, environment.unitTestCol,environment.sonar,environment.upsource];


  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(){


    if(this.report.status==environment.pending){
      this.result = environment.pending
    }else{
      this.result= this.report.currentResult.buildResult?this.report.currentResult.buildResult:environment.unknown
      if(this.previousResult!=null){
        this.previousResult = this.report.previousResult.buildResult?this.report.previousResult.buildResult:environment.unknown
      }
    }

    this.builds=this.report.builds;
    this.builds = this.builds.sort((a, b) => {
          let aValue= a.repository.split("/");
          let bValue= b.repository.split("/");
          return this.utils.compare(aValue[aValue.length-1],bValue[bValue.length-1], true);     
    }); 

    if(this.component){
      this.role=environment.component;
    }
    else if(this.parent!=""){
      this.role=environment.parent;
    }

  }


  // Se déplacer dans la page 
  navigateToAnchor(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }

  // Trier la donnée du tableau
  sortData(sort: Sort) {
    const data = this.builds.slice();
    if (!sort.active || sort.direction === '') {
      this.builds = data;
      return;
    }

    this.builds = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) { 
        case environment.nameCol:
          return this.utils.compare(a.repository, b.repository, isAsc);     
        default:
          return 0;
      }
    });
  }

}
