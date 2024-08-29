import { Component, Input, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Report } from '../../../../models/report/Report';
import { UtilsService } from '../../../../services/utils.service';
import { CommonModule } from '@angular/common';
import { ChevronSeparatorComponent } from '../../../icon/chevron-separator/chevron-separator.component';
import { GitBranchComponent } from '../../../icon/git-branch/git-branch.component';
import { DateComponent } from '../../../icon/date/date.component';
import { ChevronCalendarRightComponent } from '../../../icon/chevron-calendar-right/chevron-calendar-right.component';
import { LevelArrowCircleRightComponent } from '../../../icon/level-arrow-circle-right/level-arrow-circle-right.component';
import { TranslatePipe } from '../../../../pipe/translate.pipe';

@Component({
  selector: 'app-card-header-title',
  standalone: true,
  imports: [TranslatePipe,MatCardModule,MatIconModule,CommonModule,ChevronSeparatorComponent,GitBranchComponent,DateComponent,ChevronCalendarRightComponent,LevelArrowCircleRightComponent],
  templateUrl: './card-header-title.component.html',
  styleUrl: './card-header-title.component.scss'
})
export class CardHeaderTitleComponent {

  // Variable d'entrée
  @Input() report!:Report;  
  @Input() result!:String;
  @Input() previousResult!:String;
  @Input() component!:boolean;

  // Services
  utils:UtilsService = inject(UtilsService);

  // Variables 
  title!:string;
  ngOnInit(){

    //Definition du titre
    if(this.component){
      this.title = this.report.name.split("build-")[1].toUpperCase()
    }else{
      this.title = this.report.product + " | " + this.report.version
    }


  }
}
