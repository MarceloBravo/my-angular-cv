import { Component, AfterViewInit } from '@angular/core';
import { SenceCoursesInterface } from '../../interface/sence-courses-interface';
import { Courses as CoursesService } from '../../services/courses/courses';
import { CommonModule } from '@angular/common';
import { SenceCoursesCardOptimized } from '../../components/sence-courses-card/sence-courses-card-optimized';
import { CoursesCardOptimized } from '../../components/courses-card/courses-card-optimized';
import { OtherCoursesInterface } from '../../interface/other-courses-interface';
import AOS from 'aos';

@Component({
  selector: 'app-courses-optimized',
  imports: [CommonModule, SenceCoursesCardOptimized, CoursesCardOptimized],
  templateUrl: './courses-optimized.html',
  styleUrl: './courses-optimized.scss'
})
export class CoursesOptimized implements AfterViewInit {
  cursosSENCE: SenceCoursesInterface[] = [];
  otrosCursos: OtherCoursesInterface[] = [];

  constructor(private coursesService: CoursesService){}

  ngAfterViewInit(): void {
    // Cargar datos con un delay mayor para asegurar que todo esté listo
    setTimeout(() => {
      console.log('Loading courses data...');
      this.cursosSENCE = this.coursesService.getCursosSence();
      this.otrosCursos = this.coursesService.getOtrosCursos();
      console.log('Courses data loaded:', {
        cursosSENCE: this.cursosSENCE.length,
        otrosCursos: this.otrosCursos.length,
        firstSENCE: this.cursosSENCE[0]?.name,
        firstOther: this.otrosCursos[0]?.name
      });
      // Inicializar AOS una sola vez aquí
      AOS.init();
    }, 100); // Aumentar delay a 100ms
  }
}
