import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementerComponent } from './incrementer/incrementer.component';
import { FormsModule } from '@angular/forms';
import { DonoughtComponent } from './donought/donought.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [IncrementerComponent, DonoughtComponent],
  imports: [CommonModule, FormsModule, NgChartsModule],
  exports: [IncrementerComponent],
})
export class ComponentsModule {}
