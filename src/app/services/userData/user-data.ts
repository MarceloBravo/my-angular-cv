import { Injectable } from '@angular/core';
// @ts-ignore
import { presentation, personalInfo } from '../../data/userData';
import { UserPresentationInterface } from '../../interface/user-presentation-interface';
import { UserPersonalInfoInterface } from '../../interface/user-personal-info-interface';

@Injectable({
  providedIn: 'root',
})
export class UserData {
  
  getPresentationInfo(): UserPresentationInterface
  {
    return presentation;
  }

  getPersonalInfo(): UserPersonalInfoInterface
  {
    return personalInfo;
  }
}
