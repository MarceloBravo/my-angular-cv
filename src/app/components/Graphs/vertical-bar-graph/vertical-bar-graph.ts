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
  view: [number, number] = [this.getWidthScreen(), 400];

  // optionss
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = window.innerWidth > 768;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;

  colorScheme = 'cool';

  constructor() {
    Object.assign(this, { data: this.data })
  }

  private getWidthScreen(): number{
    const porcentajeAncho: number = 600 * 100 / window.innerWidth;
    return window.innerWidth <= 768 ? window.innerWidth : porcentajeAncho * window.innerWidth / 100;
  }

  onSelect(event: any) {
    console.log(event);
  }
}
