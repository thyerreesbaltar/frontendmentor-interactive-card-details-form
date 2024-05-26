import { Component, OnInit } from '@angular/core';
import { CardService } from '../../service/card.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [],
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.scss',
})
export class CardViewComponent implements OnInit {
  public cardData: FormGroup | any = this.cardForm.getCard();
  constructor(private cardForm: CardService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.cardData = this.cardForm.getViewCardData();
  }

  public maskNumber(number: string): string {
    return number.replace(
      /(\d{4})?(\d{4})?(\d{4})?(\d{4})/,
      '$1 $2 $3 $4'
    );
  }
}
