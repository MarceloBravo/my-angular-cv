import { Component, OnInit } from '@angular/core';
import { JobInterface } from '../../interface/job-interface';
import { JobServices } from '../../services/jobsServices/job-services';
import { CommonModule } from '@angular/common';
import { WorkExperienceCard } from '../../components/workExperienceCard/work-experience-card/work-experience-card';

@Component({
  selector: 'app-work-experience',
  imports: [CommonModule, WorkExperienceCard],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.scss',
})
export class WorkExperience implements OnInit {
  jobsData: JobInterface[] = [];
  
  constructor(private jobServices: JobServices){}

  ngOnInit(): void {
    this.jobsData = this.jobServices.getJobs();
    console.log(this.jobsData);
  }
}
