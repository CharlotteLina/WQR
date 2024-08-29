import { Component, Input, inject } from '@angular/core';
import { ResumeReport } from '../../../models/ReportDetails/resumeReport';
import { MatCardModule } from '@angular/material/card';
import { CardTitleComponent } from '../card-title/card-title.component';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UtilsService } from '../../../services/utils.service';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '../../../pipe/translate.pipe';
import { env } from 'process';

@Component({
  selector: 'app-card-view-last-product',
  standalone: true,
  imports: [MatCardModule,CardTitleComponent,CommonModule,MatIconModule,TranslatePipe],
  templateUrl: './card-view-last-product.component.html',
  styleUrl: './card-view-last-product.component.scss'
})
export class CardViewLastProductComponent {

  //Variable d'environnement 
  public environment = environment;

  // Service
  utils:UtilsService = inject(UtilsService);

  //Variable d'entrée
  @Input()  resumeReport!:ResumeReport[];

  //Variables 
  title:string=environment.report
  icon:string="view_quilt";
  noResumeReport$!:number


  constructor(private router: Router) {}

  ngOnInit(){
    this.noResumeReport$=this.resumeReport.length;
  }


  navigate(resume:ResumeReport,type:string){
    if(resume.status!=environment.pending){
    let queryParams ={ queryParams: { 'type':type,'productName': resume.product ,'productVersion': resume.version, 'id': resume.id,  } }
    this.router.navigate([environment.generateReportPath],queryParams);
    }
  }

}
