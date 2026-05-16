import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SenceCoursesInterface } from '../../interface/sence-courses-interface';
import { DateUtilsService } from '../../services/date-utils.service';

@Component({
  selector: 'app-sence-courses-card-optimized',
  imports: [CommonModule],
  templateUrl: './sence-courses-card-optimized.html',
  styleUrl: './sence-courses-card-optimized.scss'
})
export class SenceCoursesCardOptimized {
  @Input() data: SenceCoursesInterface = {} as SenceCoursesInterface;
  formatDate = (dateString: string) => DateUtilsService.formatDate(dateString);

  constructor() {}

  onImageLoad(event: Event) {
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.classList.add('error');
  }
}
