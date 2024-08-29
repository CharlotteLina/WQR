import { Component, Input } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { Graph } from '../../../../models/compare/Graph';
import { CardTitleComponent } from '../../../home/card-title/card-title.component';

export interface coord{
	name:any;
	y:any;
  color:any;
  x:any;
  branch:any;
}

@Component({
  selector: 'app-bubble-chart',
  standalone: true,
  imports: [CanvasJSAngularChartsModule,CardTitleComponent],
  templateUrl: './bubble-chart.component.html',
  styleUrl: './bubble-chart.component.scss'
})
export class BubbleChartComponent {

  @Input() graph!:Graph;

  @Input() width!:String;
  @Input() height!:String;
  chartOptions:any;

  ngOnInit(){


    let finalData=[]

		let dataPoint=new Array<coord>
		for(const point of this.graph.dataList[0].dataPoints){
      let detail = point.name.split('___')
       let color = this.getColor(detail[2]);
			dataPoint.push({x: new Date(point.x), y: parseFloat(point.y.replace(',','.')),color:color,name:detail[0],branch:detail[1] });
		}




    this.chartOptions = {
      animationEnabled: true,
      axisX:{
        valueFormatString: "D MMM",
      },
      axisY: {
        gridThickness: 0,
        interval:1,
        labelFontColor:"white"
            },
        legend: {
        horizontalAlign: "right",
        dockInsidePlotArea: true
        },
      data: [{
        type: "scatter",
        zValueFormatString: "##.##",
        xValueFormatString: "DD - MMM - YYYY",

        showInLegend: true,
        legendText: "Chaque bulle représente un build",
        legendMarkerType: "circle",
        legendMarkerColor: "grey",
        toolTipContent: "<b><span style='\"'color: {color};'\"'>{name}</span></b><br/>Branch: {branch} <br/> Date:{x}",
        dataPoints:dataPoint
      }]
    }
  }

  getColor(result:string){
    switch(result){
      case "SUCCESS":
        return "#4caf4fd2";
      case "UNSTABLE":
        return "#ff9900cb";
      case "FAILURE":
        return "#f44336cb";
      default:
        return "#575757"
    }

  }
}
