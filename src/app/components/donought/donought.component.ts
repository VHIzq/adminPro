import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-donought',
  templateUrl: './donought.component.html',
  styleUrls: ['./donought.component.css'],
})
export class DonoughtComponent {
  public doughnut: ChartType = 'doughnut';

  public doughnutChartLabels: string[] = ['Download Sales', 'New Year Sales', 'Xmas Sales'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [350, 450, 100] }],
  };
}
