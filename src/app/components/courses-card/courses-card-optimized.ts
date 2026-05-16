import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherCoursesInterface } from '../../interface/other-courses-interface';
import { DateUtilsService } from '../../services/date-utils.service';

@Component({
  selector: 'app-courses-card-optimized',
  imports: [CommonModule],
  templateUrl: './courses-card-optimized.html',
  styleUrl: './courses-card-optimized.scss'
})
export class CoursesCardOptimized {
  @Input() data: OtherCoursesInterface = {} as OtherCoursesInterface;
  formatDate = (dateString: string) => DateUtilsService.formatDate(dateString);

  constructor() {}
  
  onImageLoad(event: Event) {
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.classList.add('error');
  }
}
