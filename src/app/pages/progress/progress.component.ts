import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent  {

  progress: number = 50;

  get getPorcentage() {
    return `${this.progress}%`
  }
  
  changeValue(value: number) {

    const isUpperLimit = this.progress >= 100 && value >= 0;
    if (isUpperLimit) {
    return  this.progress = 100;
    }

    const isBelowLimit = this.progress <= 0 && value < 0;
    if (isBelowLimit) {
      return this.progress = 0;      
    }
    return this.progress = this.progress + value;
  }
}
