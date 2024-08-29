import { Component } from '@angular/core';
import { GenerateReportChoiceComponent } from '../../component/generate-report/generate-report-choice/generate-report-choice.component';
@Component({
  selector: 'app-generate-report',
  standalone: true,
  imports: [GenerateReportChoiceComponent],
  templateUrl: './generate-report.component.html',
  styleUrl: './generate-report.component.scss'
})
export class GenerateReportComponent {

}
