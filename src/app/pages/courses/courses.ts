import { Component, OnInit } from '@angular/core';
import { SenceCoursesInterface } from '../../interface/sence-courses-interface';
import { Courses as CoursesService } from '../../services/courses/courses';
import { CommonModule } from '@angular/common';
import { CoursesCard } from '../../components/courses-card/courses-card';

@Component({
  selector: 'app-courses',
  imports: [CommonModule, CoursesCard],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses implements OnInit {
  cursosSENCE: SenceCoursesInterface[] = [];

  constructor(private coursesService: CoursesService){}

  ngOnInit(): void {
    this.cursosSENCE = this.coursesService.getCursosSence();
  }
}
