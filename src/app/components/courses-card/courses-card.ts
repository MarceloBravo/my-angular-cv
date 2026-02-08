import { Component, Input, OnInit } from '@angular/core';
import { SenceCoursesInterface } from '../../interface/sence-courses-interface';
import AOS from 'aos';
import { OtherCoursesInterface } from '../../interface/other-courses-interface';

@Component({
  selector: 'app-courses-card',
  imports: [],
  templateUrl: './courses-card.html',
  styleUrl: './courses-card.scss',
})
export class CoursesCard implements OnInit {
  @Input() data: OtherCoursesInterface = {
      image: '',
      institution: '',
      name: '',
      lblEndDate: '',
      lblDuration: '',
      url: ''
  }

  ngOnInit(): void {
    AOS.init();
  }

}
