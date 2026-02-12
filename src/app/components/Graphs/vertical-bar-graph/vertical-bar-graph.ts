import { Component, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-vertical-bar-graph',
  imports: [NgxChartsModule],
  templateUrl: './vertical-bar-graph.html',
  styleUrl: './vertical-bar-graph.scss',
})
export class VerticalBarGraph {
  @Input() data: any[] = [];
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() xAxisLabel: string = 'Country';
  @Input() yAxisLabel: string = 'Population';
  view: [number, number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;

  colorScheme = 'cool';

  constructor() {
    Object.assign(this, { data: this.data })
  }

  onSelect(event: any) {
    console.log(event);
  }
}
