import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Education } from './pages/education/education';
import { WorkExperience } from './pages/work-experience/work-experience';
import { Courses } from './pages/courses/courses';
import { Contact } from './pages/contact/contact';
import { Portafolio } from './pages/portafolio/portafolio';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'educacion', component: Education},
  {path: 'portafolio', component: Portafolio},
  {path: 'experiencia', component: WorkExperience},
  {path: 'cursos', component: Courses},
  {path: 'contacto', component: Contact},
  {path: '**', redirectTo: ''}
];
