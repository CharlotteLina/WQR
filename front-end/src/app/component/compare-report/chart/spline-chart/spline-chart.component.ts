import { Component, Input } from '@angular/core';
import { CanvasJS,CanvasJSAngularChartsModule, CanvasJSChart } from '@canvasjs/angular-charts';
import { Graph } from '../../../../models/compare/Graph';
import { CardTitleComponent } from '../../../home/card-title/card-title.component';
import { CardTitleSmallComponent } from '../../../home/card-title-small/card-title-small.component';


export interface coord{
	label:any;
	y:any;
}

@Component({
  selector: 'app-spline-chart',
  standalone: true,
  imports: [CanvasJSAngularChartsModule,CardTitleComponent,CardTitleSmallComponent],
  templateUrl: './spline-chart.component.html',
  styleUrl: './spline-chart.component.scss'
})



export class SplineChartComponent {

  @Input() graph!:Graph;
  @Input() width!:String;
  @Input() height!:String;


  dataPoint:coord[]=[];

  chartOptions:any;
  ngOnInit(){



	let finalData=[]
	for(const datao  of this.graph.dataList){


		this.dataPoint=new Array<coord>
		for(const point of datao.dataPoints){
			this.dataPoint.push({label: point.x, y: parseFloat(point.y.replace(',','.')) });
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
			type: "spline",
			showInLegend: true,
			name: datao.title,
			yValueFormatString: "#,###.##'%'",

			dataPoints: this.dataPoint,
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
		color:"#3D8C40",


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
