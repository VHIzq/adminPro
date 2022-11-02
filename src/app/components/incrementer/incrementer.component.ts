import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: [],
})
export class IncrementerComponent implements OnInit {
  
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input('valor') progress: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output('valor') valueOutput: EventEmitter<number> = new EventEmitter();

  changeValue(value: number) {
    const isUpperLimit = this.progress >= 100 && value >= 0;
    if (isUpperLimit) {
      this.valueOutput.emit(100);
      return (this.progress = 100);
    }
    
    const isBelowLimit = this.progress <= 0 && value < 0;
    if (isBelowLimit) {
      this.valueOutput.emit(0);
      return (this.progress = 0);
    }
    this.valueOutput.emit(this.progress);
    return this.progress = this.progress + value;
  }

  onChange(newValor: number) {
    const isValueMoreThanLimit = newValor >= 100;
    const isValueBelowThanLimit = newValor <= 0;
    
    if (isValueMoreThanLimit) {
      this.progress = 100;
    } else if ( isValueBelowThanLimit ) {
      this.progress = 0; 
    } else {
      this.progress = newValor;
    }
      this.valueOutput.emit(this.progress);
  }
}
