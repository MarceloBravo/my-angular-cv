import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-number-card',
  imports: [NgxChartsModule],
  templateUrl: './number-card-grap.html',
  styleUrl: './number-card-grap.scss',
})
export class NumberCardGraph {
  @Input() data: any[] = [];
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Output() onClick = new EventEmitter<string>()
  view: [number, number] = [this.getWidthScreen(), 300];

  // options
  colorScheme = 'cool';
  cardColor: string = '#014d58ff';

  private getWidthScreen(): number{
    const porcentajeAncho: number = 600 * 100 / window.innerWidth;
    return window.innerWidth <= 768 ? window.innerWidth : porcentajeAncho * window.innerWidth / 100;
  }

  onSelect(event: any) {
    this.onClick.emit(event);
  }

}
