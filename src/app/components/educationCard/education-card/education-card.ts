import { Component, Input } from '@angular/core';
import { DataEducation } from '../../../class/data-education';

@Component({
  selector: 'app-education-card',
  imports: [],
  templateUrl: './education-card.html',
  styleUrl: './education-card.scss',
})
export class EducationCard {
  @Input() data : DataEducation = new DataEducation();

  constructor() { }
}
