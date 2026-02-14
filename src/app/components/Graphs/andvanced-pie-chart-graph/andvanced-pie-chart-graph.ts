import { Component, Input } from '@angular/core';
import { Color, NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-andvanced-pie-chart-graph',
  imports: [NgxChartsModule],
  templateUrl: './andvanced-pie-chart-graph.html',
  styleUrl: './andvanced-pie-chart-graph.scss',
})
export class AndvancedPieChartGraph {
  @Input() data: any[] = [];
  @Input() title: string = '';
  @Input() subtitle: string = '';
  view: [number, number] = [this.getWidthScreen(), 300];

  // options
  gradient: boolean = true;
  showLegend: boolean = window.innerWidth > 768;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = 'cool';

  constructor() {
    Object.assign(this, { data: this.data });
  }



  private getWidthScreen(): number{
    const porcentajeAncho: number = 600 * 100 / window.innerWidth;
    return window.innerWidth <= 768 ? window.innerWidth : porcentajeAncho * window.innerWidth / 100;
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
