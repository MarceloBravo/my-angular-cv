import { Component, Input, OnInit } from '@angular/core';
import { JobInterface } from '../../../interface/job-interface';
import AOS from 'aos';

@Component({
  selector: 'app-work-experience-card',
  imports: [],
  templateUrl: './work-experience-card.html',
  styleUrl: './work-experience-card.scss',
})
export class WorkExperienceCard implements OnInit {
  @Input() data: JobInterface = {} as JobInterface;

  ngOnInit(): void {
      AOS.init();
    }
}
