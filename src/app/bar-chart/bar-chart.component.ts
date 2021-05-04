import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets} from 'chart.js';
import { Label ,Color} from 'ng2-charts';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Jan', 'Feb', 'March', 'April', 'May', 'June','July','August','Sep','Oct','Nov','Dec'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  

  barChartData: ChartDataSets[] = [
    { data: [35,25,35,38,35,36,25,35,37,40,35,34], label: 'Users' }
  ];

   barChartColor: Color[] = [
    { backgroundColor: 'rgb(77,184,255)' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
