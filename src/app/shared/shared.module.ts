import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFormComponent } from './card-form/card-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [CommonModule, CardFormComponent, FormsModule
  ],
  exports: [CardFormComponent],
})
export class SharedModule {}
