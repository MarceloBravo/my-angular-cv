import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataEducation } from '../../class/data-education';
import { EducationCard } from '../../components/educationCard/education-card/education-card';
import { Education as EducationSrvice } from '../../services/education/education';
import AOS from 'aos';

@Component({
  selector: 'app-education',
  imports: [CommonModule, EducationCard],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education implements AfterViewInit {
  educations: DataEducation[] = [];

  constructor(private educationService: EducationSrvice) { }

  ngAfterViewInit(): void {
    // Cargar datos en el siguiente ciclo de detección para evitar errores
    setTimeout(() => {
      console.log('Loading education data...');
      this.educations = this.educationService.getEducationData();
      console.log('Education data loaded:', {
        count: this.educations.length,
        firstItem: this.educations[0]?.name
      });
      // Inicializar AOS una sola vez aquí
      AOS.init();
    }, 0); // No indica que hay que esperar 0ms, si no que indica que se ejecutará "tan pronto como sea posible en el siguiente ciclo"
  }
}
