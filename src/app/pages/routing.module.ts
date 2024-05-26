import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SucessComponent } from './sucess/sucess.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'sucess',
    component: SucessComponent,
  },
];
