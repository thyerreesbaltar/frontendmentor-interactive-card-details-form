import { Component } from '@angular/core';
import { CardViewComponent } from '../../shared/card-view/card-view.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucess',
  standalone: true,
  imports: [CardViewComponent],
  templateUrl: './sucess.component.html',
  styleUrl: './sucess.component.scss'
})
export class SucessComponent {
  constructor(private router: Router){

  }

  public redirectToCardForm(){
    this.router.navigate([''])
  }
}
