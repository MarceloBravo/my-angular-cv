import { Component, Input, OnInit } from '@angular/core';
import { SenceCoursesInterface } from '../../interface/sence-courses-interface';
import AOS from 'aos';

@Component({
  selector: 'app-courses-card',
  imports: [],
  templateUrl: './courses-card.html',
  styleUrl: './courses-card.scss',
})
export class CoursesCard implements OnInit {
  @Input() data: SenceCoursesInterface = {
      image: '',
      label: '',
      institute: '',
      name: '',
      lblEndDate: '',
      lblDuration: ''
  }

  ngOnInit(): void {
    AOS.init();
  }

}
