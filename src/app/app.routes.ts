import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Education } from './pages/education/education';
import { WorkExperience } from './pages/work-experience/work-experience';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'educacion', component: Education},
  {path: 'experiencia', component: WorkExperience},
  {path: '**', redirectTo: ''}
];
