import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SucessComponent } from './pages/sucess/sucess.component';

export const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
    {
    path:'sucess',
    component: SucessComponent,
  }
];
