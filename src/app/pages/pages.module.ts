import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SucessComponent } from './sucess/sucess.component';
import { AppComponent } from '../app.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeComponent,
    SucessComponent,
    SharedModule,
  ],
  exports: [
    HomeComponent,
    SucessComponent
  ]
})
export class PagesModule { }
