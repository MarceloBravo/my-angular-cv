import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from 'aos';
import { Skills as SkillService } from '../../services/skills/skills';
import { Skills } from '../../interface/skills';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  skills: Skills[] = []

  constructor(private skillsService: SkillService) {}

  ngOnInit() {
    AOS.init();
    const skills = this.skillsService.getSkills();
    console.log(skills);
    this.skills = skills;
  }
}
