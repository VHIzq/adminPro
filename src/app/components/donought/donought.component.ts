import { Component, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-donought',
  templateUrl: './donought.component.html',
  styleUrls: ['./donought.component.css'],
})
export class DonoughtComponent {
  
  @Input() title!: string;

  public doughnut: ChartType = 'doughnut';

  @Input("labels") public doughnutChartLabels: string[] = ['Abarrotes', 'Cremeria', 'Electronicos'];
  
  @Input("data")  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [750, 550, 200] }],
  };


}
