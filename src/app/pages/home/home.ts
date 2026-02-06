import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from 'aos';
import { Skills as SkillService } from '../../services/skills/skills';
import { Skills } from '../../interface/skills';
import { UserData } from '../../services/userData/user-data';
import { UserPresentationInterface } from '../../interface/user-presentation-interface';
import { UserPersonalInfoInterface } from '../../interface/user-personal-info-interface';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  skills: Skills[] = [];
  presentation: UserPresentationInterface  = {
    parrafo1: '',
    parrafo2: '',
    parrafo3: '',
    parrafo4: '',
  }
  personalInfo: UserPersonalInfoInterface = {
    email: '',
    telefono: '',
    ciudad: '',
    idioma: ''
  }

  constructor(
    private skillsService: SkillService,
    private userDataService: UserData
  ) {}

  ngOnInit() {
    AOS.init();
    this.skills = this.skillsService.getSkills();
    this.personalInfo = this.userDataService.getPersonalInfo();
    this.presentation = this.userDataService.getPresentationInfo();
  }
}
