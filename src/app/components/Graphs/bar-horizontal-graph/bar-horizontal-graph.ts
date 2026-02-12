import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bar-horizontal-graph',
  imports: [NgxChartsModule],
  templateUrl: './bar-horizontal-graph.html',
  styleUrl: './bar-horizontal-graph.scss',
})
export class BarHorizontalGraph implements OnChanges {
  @Input() data: any[] = [];
  @Input() labelX: string = 'Label X';
  @Input() labelY: string = 'Label Y';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  view: [number, number] = [600, 300];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Population';
  colorScheme = 'cool';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['labelX']) {
      this.xAxisLabel = this.labelX;
    }
    if (changes['labelY']) {
      this.yAxisLabel = this.labelY;
    }
  }

  constructor() {
    Object.assign(this, { data: this.data });
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
