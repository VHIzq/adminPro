import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: [],
})
export class IncrementerComponent {
  @Input('valor') progress: number = 50;

  changeValue(value: number) {
    const isUpperLimit = this.progress >= 100 && value >= 0;
    if (isUpperLimit) {
      return (this.progress = 100);
    }

    const isBelowLimit = this.progress <= 0 && value < 0;
    if (isBelowLimit) {
      return (this.progress = 0);
    }
    return (this.progress = this.progress + value);
  }
}
