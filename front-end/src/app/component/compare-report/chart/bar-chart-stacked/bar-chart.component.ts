import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { Graph } from '../../../../models/compare/Graph';
import { CardTitleComponent } from '../../../home/card-title/card-title.component';

export interface coord{
	label:any;
	y:any;
}

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CanvasJSAngularChartsModule,CardTitleComponent],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent {


  //Variable d'entrée
  @Input() graph!:Graph;
  @Input() width!:String;
  @Input() height!:String;

  //Variable de sortie 
  @Output() elementChoose :EventEmitter<any> = new EventEmitter<any>();

  //Varialbe
  dataPoint:coord[]=[];
  chartOptions:any;


  ngOnInit(){
    const onClick = (e: { dataSeries: { type: string; }; dataPoint: { label: string; y: string; }; }) => {
      this.elementChoose.emit(e.dataPoint.label);
    }

    let finalData=[]
    for(const datao  of this.graph.dataList){
      this.dataPoint=new Array<coord>
      for(const point of datao.dataPoints){
        this.dataPoint.push({label: point.name, y: parseFloat(point.y.replace(',','.')) });
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
        click: onClick,
        cursor:"pointer",
        type: "stackedBar",
        name: datao.title,
        showInLegend: "true",
        yValueFormatString: "#,###.##'%'",
        color: color,
  
        dataPoints: this.dataPoint,
      }
      finalData.push(aTabOfData)


    }   
  
    this.chartOptions = {
      animationEnabled: true,
      legend:{
        fontSize:10,
        cursor: "pointer",
        itemclick: function (e: { dataSeries: { visible: boolean; }; chart: { render: () => void; }; }) {
            if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            } else {
                e.dataSeries.visible = true;
            }

            e.chart.render();
        }
 
      },
      axisX:{
        title: this.graph.axeXName,
        reversed: true,
        labelFontSize: 10,
        titleFontSize:15,
        interval:1,

      },
      axisY:{
        title: this.graph.axeYName,
        labelFontSize: 10,
        titleFontSize:15,
        suffix: "%",
      },
      toolTip:  {
        shared: true
      },
      data: finalData
    }	
    }
  
  
}
