import { Injectable } from '@angular/core';
import { JobInterface } from '../../interface/job-interface';
// @ts-ignore
import { jobs } from '../../data/jobs'

@Injectable({
  providedIn: 'root',
})
export class JobServices {

  getJobs(): JobInterface[]{
    return jobs;
  }
  
}
