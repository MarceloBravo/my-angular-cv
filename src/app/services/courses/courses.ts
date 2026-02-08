import { Injectable } from '@angular/core';
// @ts-ignore
import { cursosSence, otrosCursos } from '../../data/courses.js';
import { SenceCoursesInterface } from '../../interface/sence-courses-interface.js';
import { OtherCoursesInterface } from '../../interface/other-courses-interface.js';

@Injectable({
  providedIn: 'root',
})
export class Courses {
  
  getCursosSence(): SenceCoursesInterface[]{
    return cursosSence;
  }

  getOtrosCursos(): OtherCoursesInterface[]{
    return otrosCursos;
  }
}
