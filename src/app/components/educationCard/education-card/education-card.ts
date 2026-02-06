import { Component, Input, OnInit } from '@angular/core';
import { DataEducation } from '../../../class/data-education';
import AOS from 'aos';

@Component({
  selector: 'app-education-card',
  imports: [],
  templateUrl: './education-card.html',
  styleUrl: './education-card.scss',
})
export class EducationCard implements OnInit{
  @Input() data : DataEducation = new DataEducation();

  ngOnInit(): void {
   AOS.init(); 
  }

}
