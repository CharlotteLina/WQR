import { Component, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, first, of } from 'rxjs';
import { WqrService } from '../../services/wqr.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { GenerateReportDisplayWeatherComponent } from '../../component/generate-report/_weather/generate-report-display-weather/generate-report-display-weather.component';
import { Report } from '../../models/report/Report';
import { Router } from '@angular/router';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ResumeReport } from '../../models/ReportDetails/resumeReport';
import { ProductSelectedComponent } from '../../component/home/product-selected/product-selected.component';
import { CardViewLastProductComponent } from '../../component/home/card-view-last-product/card-view-last-product.component';
import { TranslatePipe } from '../../pipe/translate.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslatePipe,ProductSelectedComponent,CommonModule,MatFormFieldModule,MatSelectModule,GenerateReportDisplayWeatherComponent,MatProgressSpinner,CardViewLastProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  //Variable d'environnement 
  public environment = environment;

  //Service
  wqrService:WqrService = inject(WqrService)

  //Variable
  reportBuildType=environment.buildType
  reportTestType=environment.testType
  reportDeployType=environment.deployType
  reportWeatherType=environment.weatherType

  spinner:boolean=true;

  weatherReport!:Observable<Report>[]
  resumeReport!: Observable<ResumeReport[]>;

  constructor(private router: Router) {}
  
  // Initalisation des rapports résumé 
  initReportResume(product:any){
    this.wqrService.getReportResume(product).subscribe(response => 
      {
        let buildProductId=new Array();
        this.resumeReport=of(response);
        this.resumeReport.forEach(value=>{
          value.forEach(v=>{
            buildProductId.push(v.id)
          })
        })
        this.getBuildProductId(buildProductId);
      })
  }

  // Initialisation des rapports météo avec les builds products récupéré dans l'initialisation des résumés
  getBuildProductId(buildProductId:number[]){
    this.weatherReport = new Array;
    if(buildProductId[0]){this.weatherReport.push(this.wqrService.getAReport(buildProductId[0].toString()))}
    if(buildProductId[1]){this.weatherReport.push(this.wqrService.getAReport(buildProductId[1].toString()))}
    if(buildProductId[2]){this.weatherReport.push(this.wqrService.getAReport(buildProductId[2].toString()))}
    this.spinner=false;
  }

// 
  getProducts(products:string){
    //A faire deux fois normalement une fois pour les rapports de build et rapport météo ( suite à une demande d'avoir des rapports météo meme sans build alors les listes sont les memes, demande une seule fois)
    this.initReportResume(products)
  }

  // Navigation jusqu'a un rapport 
  navigateToReport(type:any,report:Report){
    let queryParams ={ queryParams: { 'type':type,'productName': report.product ,'productVersion': report.version, 'id': report.buildProductId } }
    this.router.navigate([environment.generateReportPath],queryParams);
  }

  // Navigation jusqu'a un rapport details
  navigateToReportDetails(details:any,report:Report){
    let queryParams ={ queryParams: { 'type':details[0],'productName': report.product ,'productVersion': report.version, 'id': report.buildProductId, details:details[1] } }
    this.router.navigate([environment.generateReportPath],queryParams);  
  }




}
