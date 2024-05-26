import { Injectable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CardInterface } from '../interface/card-interface';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private dataCard: FormGroup | any;

  private cardDefault: CardInterface = {
    name: 'JANE APPLESEED',
    number: '0000 0000 0000 0000',
    expDateMonth: '00',
    expDateYear: '00',
    cvc: '000',
  };

  private viewCardData: CardInterface = { ...this.getCardDefault };

  constructor() {}

  get getCardDefault(): CardInterface {
    return this.cardDefault;
  }
  
  public getCard() {
    return this.dataCard;
  }

  public getViewCardData() {
    return this.viewCardData;
  }

  public setCard(cardForm: FormGroup) {
    this.dataCard = cardForm;
  }

  public setViewCardData(cardForm: FormGroup) {

    this.viewCardData.name =
      cardForm.value.name !== '' ? cardForm.value.name : this.cardDefault.name;

    this.viewCardData.number =
      cardForm.value.number !== '' ? cardForm.value.number : this.cardDefault.number;

    this.viewCardData.expDateMonth =
      cardForm.value.expDateMonth !== '' ? cardForm.value.expDateMonth : this.cardDefault.expDateMonth;

    this.viewCardData.expDateYear =
      cardForm.value.expDateYear !== '' ? cardForm.value.expDateYear : this.cardDefault.expDateYear;

    this.viewCardData.cvc =
      cardForm.value.cvc !== '' ? cardForm.value.cvc : this.cardDefault.cvc;
  }
}
