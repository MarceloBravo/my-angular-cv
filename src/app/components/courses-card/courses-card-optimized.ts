import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherCoursesInterface } from '../../interface/other-courses-interface';

@Component({
  selector: 'app-courses-card-optimized',
  imports: [CommonModule],
  templateUrl: './courses-card-optimized.html',
  styles: [`
    .card-courses-container {
      perspective: 1000px;
    }
    
    .card-courses {
      width: 300px;
      height: 200px;
      position: relative;
      transform-style: preserve-3d;
      transition: transform 0.6s;
      cursor: pointer;
      margin: 10% 0px;
    }
    
    .card-courses-front,
    .card-courses-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 10px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .course-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
      opacity: 1;
      transition: opacity 0.3s ease;
    }
    
    .course-image.error {
      opacity: 0.5;
    }
    
    .card-courses-back {
      background-color: #fcfcfc;
      color: rgb(17, 17, 17);
      transform: rotateY(180deg);
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 10px 20px;
      font-size: 1rem;
      border-radius: 10px;
    }
    
    .row-card-courses {
      display: flex;
      justify-content: center;
      flex-wrap: nowrap;
      flex-direction: column;
    }
    
    .card-courses-container:hover .card-courses {
      transform: rotateY(180deg);
    }
    
    @media (max-width: 768px) {
      .card-courses {
        width: 250px;
        height: 167px;
        margin: 5% 0px;
      }
    }
    
    @media (max-width: 576px) {
      .card-courses {
        width: 200px;
        height: 133px;
        margin: 3% 0px;
      }
      
      .row-card-courses {
        font-size: 0.9rem;
      }
    }
  `]
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
