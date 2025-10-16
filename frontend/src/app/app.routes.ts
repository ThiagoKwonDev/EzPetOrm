import { Routes } from '@angular/router';
import { Tutor } from './core/interface/tutor/tutor';
import { Pet } from './core/interface/pet/pet';
import { Menu } from './core/interface/menu/menu';
import { Servico } from './core/interface/servico/servico';
import { Prestador } from './core/interface/prestador/prestador';

export const routes: Routes = [
  { path: '', component: Menu },
  { path: 'tutor', component: Tutor },
  { path: 'pet', component: Pet },
  { path: 'servico', component: Servico },
  { path: 'prestador', component: Prestador },
];
