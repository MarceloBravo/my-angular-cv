import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Education } from './pages/education/education';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'educacion', component: Education},
  {path: '**', redirectTo: ''}
];
