import { Component, Input, OnInit } from '@angular/core';
import { SenceCoursesInterface } from '../../interface/sence-courses-interface';
import AOS from 'aos';
import { OtherCoursesInterface } from '../../interface/other-courses-interface';
import { DateUtilsService } from '../../services/date-utils.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses-card',
  imports: [CommonModule],
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
      url: '',
      contents: []
  }
  dateUtils: DateUtilsService | null = null;

  constructor(private dateUtilsService: DateUtilsService) {
    this.dateUtils = this.dateUtilsService;
  }

  ngOnInit(): void {
    AOS.init();
  }

}
