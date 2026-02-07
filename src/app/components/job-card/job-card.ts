import { Component, Input, OnInit } from '@angular/core';
import AOS from 'aos';
import { JobInterface } from '../../interface/job-interface';

@Component({
  selector: 'app-job-card',
  imports: [],
  templateUrl: './job-card.html',
  styleUrl: './job-card.scss',
})
export class JobCard implements OnInit {
  @Input() data: JobInterface = {
    years: '',
    company: '',
    position: '',
    detail: ''
  }

  ngOnInit(): void {
    AOS.init();
  }
}
