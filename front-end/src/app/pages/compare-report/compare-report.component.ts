import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {
  CompareReportChoiceComponent
} from '../../component/compare-report/compare-report-choice/compare-report-choice.component';


@Component({
  selector: 'app-compare-report',
  standalone: true,
  imports: [CommonModule,CompareReportChoiceComponent],
  templateUrl: './compare-report.component.html',
  styleUrl: './compare-report.component.scss'
})



export class CompareReportComponent {

}


