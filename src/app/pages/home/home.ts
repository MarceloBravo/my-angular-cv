import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from 'aos';
import { Skills as SkillService } from '../../services/skills/skills';
import { Skills } from '../../interface/skills';
import { UserData } from '../../services/userData/user-data';
import { Credentials } from '../../services/credentials/credentials';
import { UserPresentationInterface } from '../../interface/user-presentation-interface';
import { UserPersonalInfoInterface } from '../../interface/user-personal-info-interface';
import { CredentialInterface } from '../../interface/credential-interface';
import { Credential } from '../../components/credential/credential';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Credential],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit {
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
  credentials: CredentialInterface[] = [];

  constructor(
    private skillsService: SkillService,
    private userDataService: UserData,
    private credentialService: Credentials
  ) {}

  ngAfterViewInit() {
    // Cargar datos en el siguiente ciclo de detección para evitar el error
    setTimeout(() => {
      this.loadData();
      AOS.init();
    }, 0);
  }

  private loadData() {
    this.skills = this.skillsService.getSkills();
    this.personalInfo = this.userDataService.getPersonalInfo();
    this.presentation = this.userDataService.getPresentationInfo();
    this.credentials = this.credentialService.getCredentials();
  }
}
