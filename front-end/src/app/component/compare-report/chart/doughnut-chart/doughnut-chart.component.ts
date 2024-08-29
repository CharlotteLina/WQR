import { Component, Input } from '@angular/core';
import { Graph } from '../../../../models/compare/Graph';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { Data } from '../../../../models/compare/Data';
import { CardTitleComponent } from '../../../home/card-title/card-title.component';

export interface coord{
	name:any;
	y:any;
  color:any;
}

@Component({
  selector: 'app-doughnut-chart',
  standalone: true,
  imports: [CanvasJSAngularChartsModule,CardTitleComponent],
  templateUrl: './doughnut-chart.component.html',
  styleUrl: './doughnut-chart.component.scss'
})
export class DoughnutChartComponent {

  
  @Input() graph!:Data;
  @Input() width!:String;
  @Input() height!:String;


  dataPoint:coord[]=[];

  chartOptions:any;
  ngOnInit(){


	let finalData=[]
	this.dataPoint=new Array<coord>
  for(const datao  of this.graph.dataPoints){
		let color="#006878"
		switch(datao.name){
			case("SUCCESS"):
				color="#4CAF50";
				break;
			case("UNSTABLE"):
				color="#FF9800"
				break;
			case("FAILURE"):
				color="#F44336"
				break;
			case("ABORTED"):
				color="#797979"
				break;
			default:
				break;
		}
    this.dataPoint.push({name: datao.name, y: parseFloat(datao.y.replace(',','.')),color:color });
  }


  this.chartOptions = {
	  animationEnabled: true,
	  data:[{
      type: "doughnut",
	  indexLabel: "{name}",
	  indexLabelFontSize:10,

      yValueFormatString: "#,###.##'%'",
    //   indexLabel: "{name}",
      dataPoints: this.dataPoint,
    }]
	}	
  }

}
