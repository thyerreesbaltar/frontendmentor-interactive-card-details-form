import { Component } from '@angular/core';
import { CardFormComponent } from '../../shared/card-form/card-form.component';
import { CardViewComponent } from '../../shared/card-view/card-view.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardFormComponent, CardViewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
