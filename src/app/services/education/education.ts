import { Injectable } from '@angular/core';
import { DataEducation } from '../../class/data-education';
// @ts-ignore
import { education } from '../../data/education';

@Injectable({
  providedIn: 'root',
})
export class Education {
  dataEducation: DataEducation[] = [];
  
  getEducationData(): DataEducation[] {
    const data = education.map((item: any) => {
      return {
        years: item.header.years, 
        name: item.header.name, 
        image: item.header.image, 
        title: item.body.title, 
        institution: item.body.institution, 
        description: item.body.description, 
        styles: item.styles
      };
    });
    return data;
  }
}
