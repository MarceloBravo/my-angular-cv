import { Injectable } from '@angular/core';
// @ts-ignore
import { data } from '../../data/skills';
import { Skills as skills } from '../../interface/skills';

@Injectable({
  providedIn: 'root',
})
export class Skills {
  

  constructor() { }

  getSkills(): skills[] {
    return data;
  }
}
