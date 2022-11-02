import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styles: [],
})
export class Chart1Component {
  labels1: string[] = ['Download Sales', 'New Year Sales', 'Xmas Sales'];

  public  data1: ChartData<'doughnut'> = {
    datasets: [{ data: [350, 450, 100] }],
  };
}
