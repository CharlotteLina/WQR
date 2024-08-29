import { Component, inject } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { BuildCompareComponent } from '../../component/compare-report/build-compare/build-compare.component';
import { CommonModule } from '@angular/common';
import { WqrService } from '../../services/wqr.service';
import { Observable, of } from 'rxjs';
import { ReportCompare } from '../../models/compare/ReportCompare';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from '../../environments/environment';
import { TranslatePipe } from '../../pipe/translate.pipe';
import {DeployCompareComponent} from "../../component/compare-report/deploy-compare/deploy-compare.component";

@Component({
  selector: 'app-compare-report-display',
  standalone: true,
  imports: [MatCard, BuildCompareComponent, CommonModule, RouterLink, RouterLinkActive, TranslatePipe, DeployCompareComponent],
  templateUrl: './compare-report-display.component.html',
  styleUrl: './compare-report-display.component.scss'
})
export class CompareReportDisplayComponent {

  //Variable d'environnement
  public environment = environment;

  //Services
  wqrService:WqrService = inject(WqrService);

  // Variables
  reportCompare$!:Observable<ReportCompare>;
  type!:string;
  product!:string;
  startDate!:string;
  endDate!:string;
  errorMessage:boolean=false;
  loading!:boolean;


  constructor(private route: ActivatedRoute,public dialog: MatDialog,private router: Router) {}

  ngOnInit(){

    this.loading=true;
    // Récupération des parametres
    let queryType= this.route.snapshot.queryParamMap.get('type');
    let queryProduct= this.route.snapshot.queryParamMap.get('productName');
    let queryStartDate= this.route.snapshot.queryParamMap.get('date');
    let queryEndDate= this.route.snapshot.queryParamMap.get('to');

    if(queryType){
      this.type=queryType;
    }
    if(queryProduct){
      this.product=queryProduct;
    }
    if(queryStartDate){
      this.startDate=queryStartDate;
    }
    if(queryEndDate){
      this.endDate=queryEndDate;
    }


  // Generation de la comparaison build
  this.wqrService.getACompare(this.type,this.product,this.startDate,this.endDate)
  .subscribe(response => {
    of(response).forEach(v=>{
      if(v.value){
        this.errorMessage = true;
      }
      else if(!v.idBuildProduct){
        this.errorMessage = true
      }else{
        this.reportCompare$=of(response)
      }
      this.loading=false;
    })
    });


  }
}
