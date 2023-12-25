import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.css']
})
export class PlacementsComponent {
  Highcharts=Highcharts
  chartOptions={}


  constructor(){
    this.chartOptions={
      //give chart configuration data from highchart
      chart: {
        renderTo: 'container',
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },
    xAxis: {
        categories: ['B.Com', 'B.C.A', 'B.B.A', 'Bsc.Computer Science', 'BA Functional English', 
            'BSc Food Technology']
    },
    yAxis: {
        title: {
            enabled: false
        }
    },
    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: 'Placements: {point.y}'
    },
    title: {
        text: 'Yearly Placement  Analysis 2022-2023',
        align: 'center'
    },
   
    legend: {
        enabled: false
    },
    credits:{
      enabled:false

    },
    plotOptions: {
        column: {
            depth: 25
        }
    },
    series: [{
        data: [1318, 1073, 1060, 813, 775, 745],
        colorByPoint: true
    }]

      
    }


  }



}
