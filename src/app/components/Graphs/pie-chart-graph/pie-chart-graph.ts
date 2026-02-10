import { Component, Input } from '@angular/core';
import { NgxChartsModule, LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pie-chart-graph',
  imports: [NgxChartsModule],
  templateUrl: './pie-chart-graph.html',
  styleUrl: './pie-chart-graph.scss',
})
export class PieChartGraph {
  @Input() data: any[] = [];
  @Input() title: string = '';
  view: [number, number] = [600, 300];

  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  colorScheme = 'cool';
  legendPosition: LegendPosition = LegendPosition.Right
}
