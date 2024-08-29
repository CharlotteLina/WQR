import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WqrService } from '../../services/wqr.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Report } from '../../models/report/Report';
import { Observable, of } from 'rxjs';
import { GenerateReportDisplayBuildComponent } from '../../component/generate-report/_build/generate-report-display-build/generate-report-display-build.component';
import { GenerateReportDisplayTestComponent } from '../../component/generate-report/_test/generate-report-display-test/generate-report-display-test.component';
import { GenerateReportDisplayDeployComponent } from '../../component/generate-report/_deploy/generate-report-display-deploy/generate-report-display-deploy.component';
import { MatIconModule } from '@angular/material/icon';
import { TestIntegration } from '../../models/report/TestIntegration/testIntegration';
import { GenerateReportDisplayWeatherComponent } from '../../component/generate-report/_weather/generate-report-display-weather/generate-report-display-weather.component';
import { environment } from '../../environments/environment';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '../../pipe/translate.pipe';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { PdfGeneratorComponent } from '../../component/generate-report/common/pdf-generator/pdf-generator.component';
pdfMake.vfs = pdfFonts.pdfMake.vfs;



@Component({
  selector: 'app-generate-report-display',
  standalone: true,
  imports: [TranslatePipe,MatTabsModule,CommonModule,GenerateReportDisplayBuildComponent,RouterLink,RouterLinkActive,GenerateReportDisplayTestComponent,GenerateReportDisplayDeployComponent,RouterLink,RouterLinkActive,MatIconModule,GenerateReportDisplayWeatherComponent,PdfGeneratorComponent],
  templateUrl: './generate-report-display.component.html',
  styleUrl: './generate-report-display.component.scss'
})
export class GenerateReportDisplayComponent {

  //Variable d'environnement 
  public environment = environment;

  //Services
  wqrService:WqrService = inject(WqrService);

  // Variables
  report$!:Observable<Report>;
  type!:string;
  testsIntegration!:TestIntegration[];
  details!:any

  queryParamsWeather:any;

  selectedIndex="0"


  constructor(private route: ActivatedRoute,private router: Router) {
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        this.ngOnInit()
      }
      
  });
  }

  readonly dialog = inject(MatDialog);

  openDialog(report:Report): void {
    this.dialog.open(PdfGeneratorComponent, {
      width: '40vw',
      height:'30vh',
      enterAnimationDuration:'2ms',
      exitAnimationDuration:'2ms',
      data:{report:report,reportType:this.type}
    });
  }

  async ngOnInit() {
    this.queryParamsWeather ={ 'type':environment.weatherType,'productName': this.route.snapshot.queryParamMap.get('productName') ,'productVersion': this.route.snapshot.queryParamMap.get('productVersion'), 'id': this.route.snapshot.queryParamMap.get('id')}

    //Récupération de l'id du produit 
    const idBuildProduct = this.route.snapshot.queryParamMap.get('id');
    const reportType = this.route.snapshot.queryParamMap.get('type');
     this.details = this.route.snapshot.queryParamMap.get('details')
    //Requete du rapport
    if(idBuildProduct){
      await this.wqrService.getAReport(idBuildProduct)
      .subscribe(response => {
        this.report$ = of(response)
        });
    }
    this.changeType(reportType)
  }

  
  // Changement de type de rapport 
  changeType(type:any){
      let typeWord:string="";
      if(type==environment.buildType){
        this.selectedIndex="1"
        typeWord=environment.buildTypeLowerCase
      }
      if(type==environment.testType){
        this.selectedIndex="3"
        typeWord=environment.testTypeLowerCase
      }
      if(type==environment.deployType){
        this.selectedIndex="2"
        typeWord=environment.deployTypeLowerCase
      }
      if(type==environment.weatherType){
        this.selectedIndex="0"
        typeWord=environment.weatherTypeLowerCase
      }

      
      if(typeWord!=this.type){
        this.type = typeWord
        console.log(this.type)
        this.router.navigate(
          [], 
          {
            relativeTo: this.route,
            queryParams: { type: type },
            queryParamsHandling: 'merge'
          });
    }
  }

  //Navigation vers un detail de rapport 
  goDetail(details:any){
    this.details = details
    this.router.navigate(
      [], 
      {
        relativeTo: this.route,
        queryParams: { type: details[0], details:details[1]},
        queryParamsHandling: 'merge'
      });
  }

  // Navigation vers un rapport
  navigateToReport(){
    let queryParams ={ queryParams: {'type':environment.weatherType,'productName': this.route.snapshot.queryParamMap.get('productName') ,'productVersion': this.route.snapshot.queryParamMap.get('productVersion'), 'id': this.route.snapshot.queryParamMap.get('id')} }
    this.router.navigate([environment.generateReportPath],queryParams);
  }

  // Affchiage de l'impression imprimer
  print(){
    window.print()
  }

  // Revenir à la page précédente
  previous(){
    window.history.back();
  }

  // Changement d'onglet 
  changeTab(event:any){
    let type = environment.weatherType
    switch(event.index){
      case(1):
        type=environment.buildType
        break;
      case(2):
        type=environment.deployType
        break;
      case(3):
        type=environment.testType
        break;
    }
    let queryParams ={ queryParams: { 'type':type,'productName': this.route.snapshot.queryParamMap.get('productName') ,'productVersion': this.route.snapshot.queryParamMap.get('productVersion'), 'id': this.route.snapshot.queryParamMap.get('id')} }
    this.router.navigate([environment.generateReportPath],queryParams);
  }

}
