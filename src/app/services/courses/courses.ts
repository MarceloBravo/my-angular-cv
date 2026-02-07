import { Injectable } from '@angular/core';
// @ts-ignore
import { cursosSence } from '../../data/courses.js';
import { SenceCoursesInterface } from '../../interface/sence-courses-interface.js';

@Injectable({
  providedIn: 'root',
})
export class Courses {
  
  getCursosSence(): SenceCoursesInterface[]{
    return cursosSence;
  }
}
