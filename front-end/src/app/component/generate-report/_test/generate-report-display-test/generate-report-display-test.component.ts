import { Component,ViewChild, Input, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatSortModule, Sort } from '@angular/material/sort';

import { MatDialog } from '@angular/material/dialog';
import { Report } from '../../../../models/report/Report';
import { UtilsService } from '../../../../services/utils.service';
import { CardHeaderTitleComponent } from '../../common/card-header-title/card-header-title.component';
import { MatCardModule } from '@angular/material/card';
import { ReplacePipe } from '../../../../pipe/replace.pipe';
import { TestIntegration } from '../../../../models/report/TestIntegration/testIntegration';
import { MatTabsModule } from '@angular/material/tabs';
import { GenerateReportDisplayTestDetailComponent } from '../generate-report-display-test-detail/generate-report-display-test-detail.component';
import { environment } from '../../../../environments/environment';
import { TranslatePipe } from '../../../../pipe/translate.pipe';

@Component({
  selector: 'app-generate-report-display-test',
  standalone: true,
  imports: [CommonModule,MatCardModule,CardHeaderTitleComponent,ReplacePipe,MatSortModule,MatTabsModule,GenerateReportDisplayTestDetailComponent],
  templateUrl: './generate-report-display-test.component.html',
  styleUrl: './generate-report-display-test.component.scss'
})


export class GenerateReportDisplayTestComponent {

  //Variable d'environnement 
  translatePipe:TranslatePipe=new TranslatePipe();


  // Services
  utils:UtilsService = inject(UtilsService);
  
  // Variable d'entrée
  @Input() report!:Report; 

  // Variable
  detailsTest!:Array<TestIntegration[]>;


  displayedColumns: string[] = ['#',this.translatePipe.transform('name'),this.translatePipe.transform('type'),this.translatePipe.transform('pfName'),'Date',this.translatePipe.transform('duration'),'Total','OK','KO','NA','WARN'];
  constructor(public dialog: MatDialog) {}

  ngOnInit(){

    //Faire les onglets pour les details des tests au retour de vacances

  }



}


  


