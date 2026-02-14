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
  @Input() subtitle: string = '';
  view: [number, number] = [this.getWidthScreen(), 300];

  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  colorScheme = 'cool';
  legendPosition: LegendPosition = LegendPosition.Right

  private getWidthScreen(): number{
    const porcentajeAncho: number = 600 * 100 / window.innerWidth;
    return window.innerWidth <= 768 ? window.innerWidth : porcentajeAncho * window.innerWidth / 100;
  }
}
