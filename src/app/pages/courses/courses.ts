import { Component, AfterViewInit } from '@angular/core';
import { SenceCoursesInterface } from '../../interface/sence-courses-interface';
import { Courses as CoursesService } from '../../services/courses/courses';
import { CommonModule } from '@angular/common';
import { CoursesCard } from '../../components/courses-card/courses-card';
import { SenceCoursesCard } from "../../components/sence-courses-card/sence-courses-card";
import { OtherCoursesInterface } from '../../interface/other-courses-interface';

@Component({
  selector: 'app-courses',
  imports: [CommonModule, CoursesCard, SenceCoursesCard],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses implements AfterViewInit {
  cursosSENCE: SenceCoursesInterface[] = [];
  otrosCursos: OtherCoursesInterface[] = [];

  constructor(private coursesService: CoursesService){}

  ngAfterViewInit(): void {
    // Cargar datos en el siguiente ciclo de detección para evitar el error
    setTimeout(() => {
      console.log('Loading courses data...');
      this.cursosSENCE = this.coursesService.getCursosSence();
      this.otrosCursos = this.coursesService.getOtrosCursos();
      console.log('Courses data loaded:', {
        cursosSENCE: this.cursosSENCE.length,
        otrosCursos: this.otrosCursos.length
      });
    }, 0);
  }
}
