import { Component, Input, OnInit } from '@angular/core';
import AOS from 'aos';
import { SenceCoursesInterface } from '../../interface/sence-courses-interface';

@Component({
  selector: 'app-sence-courses-card',
  imports: [],
  templateUrl: './sence-courses-card.html',
  styleUrl: './sence-courses-card.scss',
})
export class SenceCoursesCard implements OnInit {
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
