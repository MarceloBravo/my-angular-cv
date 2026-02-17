import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherCoursesInterface } from '../../interface/other-courses-interface';

@Component({
  selector: 'app-courses-card-optimized',
  imports: [CommonModule],
  templateUrl: './courses-card-optimized.html',
  styleUrl: './courses-card-optimized.scss'
})
export class CoursesCardOptimized {
  @Input() data: OtherCoursesInterface = {} as OtherCoursesInterface;

  constructor() {}

  // Formateo de fecha simple
  formatDate(dateString: string): string {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    } catch {
      return dateString;
    }
  }

  onImageLoad(event: Event) {
    console.log('Image loaded successfully:', this.data.image);
  }

  onImageError(event: Event) {
    console.error('Image failed to load:', this.data.image);
    const img = event.target as HTMLImageElement;
    img.classList.add('error');
  }
}
