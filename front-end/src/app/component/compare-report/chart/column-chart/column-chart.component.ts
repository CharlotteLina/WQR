import { Component, Input } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { CardTitleComponent } from '../../../home/card-title/card-title.component';
import { Graph } from '../../../../models/compare/Graph';


export interface coord{
	label:any;
	y:any;
}


@Component({
  selector: 'app-column-chart',
  standalone: true,
  imports: [CanvasJSAngularChartsModule,CardTitleComponent],
  templateUrl: './column-chart.component.html',
  styleUrl: './column-chart.component.scss'
})
export class ColumnChartComponent {

  @Input() graph!:Graph;
  @Input() width!:String;
  @Input() height!:String;

  chartOptions:any;

  ngOnInit(){

	let finalData=[]
	for(const datao  of this.graph.dataList){


		let dataPoint=new Array<coord>
		for(const point of datao.dataPoints){
			dataPoint.push({label: point.name, y: parseFloat(point.y.replace(',','.')) });
		}

		let color="#006878"
		switch(datao.title){
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
				color="#797979";
				break;
			default:
				break;
		}
		let aTabOfData={
			type: "column",
			showInLegend: true,
			name: datao.title,
			xValueFormatString: "DD - MMM - YYYY",
			yValueFormatString: "#,###.##'%'",

			dataPoints: dataPoint,
			color:color
		}
		finalData.push(aTabOfData)

	}




  this.chartOptions = {
	  animationEnabled: true,
	  axisY: {
      title: this.graph.axeYName,

      valueFormatString: "#,###.##'%'",
      gridThickness: 0.3,
	  },
	  toolTip: {
		  shared: true
	  },
	  legend: {
      cursor: "pointer",
      itemclick: function (e: any) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        e.chart.render();
      }
	  },
	  data: finalData
	}
  }

}
