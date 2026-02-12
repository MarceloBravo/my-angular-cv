import { Injectable } from '@angular/core';
import { DataEducation } from '../../class/data-education';
// @ts-ignore
import { education } from '../../data/education';
import { AniosEstudiosInterface } from '../../interface/anios-estudios-interface';

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
        styles: item.styles,
        duration: item.duration
      };
    });
    return data;
  }

  aniosPorInstitucion(): AniosEstudiosInterface[]{
    const data: AniosEstudiosInterface[] = education.map((item: any) => {
      const desde = parseInt(item.header.years.split('-')[0]);
      const hasta = parseInt(item.header.years.split('-')[1]);
      return {
        desde: desde, 
        hasta: hasta, 
        institucion: item.body.institution, 
        duracion: item.duration, 
        carrera: item.body.tittle,
        label: item.short_title,
        anios: item.duration / 12
      }
    });

    return data;
  }

}
