import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { UtilsService } from '../../../../services/utils.service';
import { GenerateReportDisplayComponent } from '../../../../pages/generate-report-display/generate-report-display.component';
import { MatCardModule } from '@angular/material/card';
import { CardHeaderTitleComponent } from '../../common/card-header-title/card-header-title.component';
import { Report } from '../../../../models/report/Report';
import { MatTabsModule } from '@angular/material/tabs';
import { GenerateReportDisplayBuildProductComponent } from '../generate-report-display-build-product/generate-report-display-build-product.component';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';

export interface Tabs {
  name: string;
  report:Report;
  component:boolean;
  parent:string;
}

@Component({
    selector: 'app-generate-report-display-build',
    standalone: true,
    templateUrl: './generate-report-display-build.component.html',
    styleUrl: './generate-report-display-build.component.scss',
    imports: [CommonModule,GenerateReportDisplayComponent,MatCardModule,CardHeaderTitleComponent,MatTabsModule,GenerateReportDisplayBuildProductComponent],

})
export class GenerateReportDisplayBuildComponent {

  //Variable d'environnement 
  public environment = environment;

  //Variable d'entrée
  @Input() report!:Report;  

  //Services
  utils:UtilsService = inject(UtilsService);
  
  //Variables 
  tabs$!:Tabs[];
  detailIndex:string="0";
  
  constructor(public dialog: MatDialog,private route: ActivatedRoute) {
  }

  async ngOnInit(){
    //Initialisation des tabs 
    this.tabs$ = new Array<Tabs>
    this.report.builds.forEach(b=>{
    })
    this.tabs$.push({name:environment.buildType+"-"+this.report.product,report:this.report,component:false,parent:""});
    this.tabs$[0].report.builds.forEach(b=>{
    })
    //Récuperation des tabs pour les composants
    this.report.component.forEach((key:Report)=>{
      this.tabs$.push({name:environment.buildType+"-"+key.product,report:key,component:true,parent:this.report.product.toLowerCase()});
    });

    //Récupération des tabs parents
    this.getTabsParent(this.report)
    
    
    // Initialisation des tabs de details
    let detail = this.route.snapshot.queryParamMap.get('details')
    switch(detail){
      case(environment.compilation):
        this.detailIndex="1";
        break;
      case(environment.unitTest):
        this.detailIndex="2";
        break;
      case(environment.sonar):
        this.detailIndex="3";
        break;
      case(environment.upsource):
        this.detailIndex="4";
        break;
    }

  }

  // Mise en place des onglets parents
  getTabsParent(buildProduct:Report){
    if(buildProduct.buildProductParent!=null){
      this.tabs$.push({name:environment.buildType+"-"+buildProduct.buildProductParent.product,report:buildProduct.buildProductParent,component:false,parent:buildProduct.product.toLowerCase()});
      this.getTabsParent(buildProduct.buildProductParent)
    }
  }

  // Remise a 0 des tabs
  selectedTabChange(){
    this.detailIndex="0";
  }
}



