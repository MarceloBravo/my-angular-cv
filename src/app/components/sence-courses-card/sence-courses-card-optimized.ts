import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SenceCoursesInterface } from '../../interface/sence-courses-interface';

@Component({
  selector: 'app-sence-courses-card-optimized',
  imports: [CommonModule],
  templateUrl: './sence-courses-card-optimized.html',
  styleUrl: './sence-courses-card-optimized.scss'
})
export class SenceCoursesCardOptimized {
  @Input() data: SenceCoursesInterface = {} as SenceCoursesInterface;

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
    console.log('SENCE image loaded successfully:', this.data.image);
  }

  onImageError(event: Event) {
    console.error('SENCE image failed to load:', this.data.image);
    const img = event.target as HTMLImageElement;
    img.classList.add('error');
  }
}
