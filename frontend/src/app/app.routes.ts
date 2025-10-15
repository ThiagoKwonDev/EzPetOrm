import { Routes } from '@angular/router';
import { Tutor } from './core/interface/tutor/tutor';
import { Pet } from './core/interface/pet/pet';
import { Menu } from './core/interface/menu/menu';

export const routes: Routes = [
  { path: '', component: Menu },
  { path: 'tutor', component: Tutor },
  { path: 'pet', component: Pet },
];
