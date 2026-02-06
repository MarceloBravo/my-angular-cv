import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataEducation } from '../../class/data-education';
import { EducationCard } from '../../components/educationCard/education-card/education-card';
import { Education as EducationSrvice } from '../../services/education/education';

@Component({
  selector: 'app-education',
  imports: [CommonModule, EducationCard],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education implements OnInit {
  educations: DataEducation[] = [];

  constructor(private educationService: EducationSrvice) { }

  ngOnInit(): void {
    this.educations = this.educationService.getEducationData();
  }
}
