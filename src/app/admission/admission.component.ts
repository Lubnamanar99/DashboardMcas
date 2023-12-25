import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent {
  Highcharts=Highcharts
  chartOptions={}


  constructor(){
    this.chartOptions={

      chart: {
        type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0
    }
},
title: {
    text: 'Average Student Admission 2022-2023',
    align: 'center'
},

accessibility: {
    point: {
        valueSuffix: '%'
    }
},
tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
},
plotOptions: {
    pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }
},
credits:{enabled:false},
series: [{
    type: 'pie',
    name: 'Share',
    data: [
        ['BA ENGLISH', 23],
        ['BCA', 12],
        
        ['Bsc.Computer Science', 8],
        ['BBA', 20],
        ['BSc Food Technology', 7],
        ['B.Com',30]
    ]
}]

    }
  }
}
