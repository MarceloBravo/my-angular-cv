import { Component, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pie-grid-graph',
  imports: [NgxChartsModule],
  templateUrl: './pie-grid-graph.html',
  styleUrl: './pie-grid-graph.scss',
})
export class PieGridGraph {
  @Input() data: any[] = [];
  @Input() title: string = '';
  view: [number, number] = [700, 300];

  // options
  colorScheme = 'cool';
  minWidth: number = 200; // Ancho mínimo para cada gráfico individual
}
