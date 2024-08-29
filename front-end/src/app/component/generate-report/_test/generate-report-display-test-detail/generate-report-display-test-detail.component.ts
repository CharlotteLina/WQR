import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardHeaderTitleComponent } from '../../common/card-header-title/card-header-title.component';
import { ReplacePipe } from '../../../../pipe/replace.pipe';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { UtilsService } from '../../../../services/utils.service';
import { TestIntegration } from '../../../../models/report/TestIntegration/testIntegration';
import { MatDialog } from '@angular/material/dialog';
import { Report } from '../../../../models/report/Report';


@Component({
  selector: 'app-generate-report-display-test-detail',
  standalone: true,
  imports: [CommonModule,MatCardModule,CardHeaderTitleComponent,ReplacePipe,MatSortModule,MatTabsModule],
  templateUrl: './generate-report-display-test-detail.component.html',
  styleUrl: './generate-report-display-test-detail.component.scss'
})
export class GenerateReportDisplayTestDetailComponent {

  utils:UtilsService = inject(UtilsService);
  @Input() report!:Report; 
  @Input() result!:String; 

  @Input() tests!:TestIntegration[];
  previousResult!:string;
  displayedColumns: string[] = ['#','Nom','Type','Nom de la PF','Date','Durée','Total','OK','KO','NA','WARN'];
  constructor(public dialog: MatDialog) {}

  ngOnInit(){
    this.tests=this.report.testIntegrations
  }


  sortData(sort: Sort) {
    const data = this.tests.slice();
    if (!sort.active || sort.direction === '') {
      this.tests = data;
      return;
    }

    this.tests = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) { 
        case '#':
            return this.utils.compare(a.result, b.result, isAsc);     
        case 'Nom':
          return this.utils.compare(a.scenarioName, b.scenarioName, isAsc);     
        case 'Type':
          return this.utils.compare(a.type, b.type, isAsc);     
        case 'Nom de la PF':
          return this.utils.compare(a.pfName, b.pfName, isAsc);     
        case 'Durée':
          return this.utils.compare(a.duration, b.duration, isAsc);     
        case 'Total':
          return this.utils.compare(a.nbTestTotal, b.nbTestTotal, isAsc);     
        case 'OK':
          return this.utils.compare(a.nbTestOk, b.nbTestOk, isAsc);     
        case 'KO':
          return this.utils.compare(a.nbTestKo, b.nbTestKo, isAsc);     
        case 'NA':
          return this.utils.compare(a.nbTestNa, b.nbTestNa, isAsc);
        case 'WARN':
          return this.utils.compare(a.nbTestWarn, b.nbTestWarn, isAsc);   
        default:
          return 0;
      }
    });
  }
}
