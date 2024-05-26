import { Component, DoCheck } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { Router } from '@angular/router';

//Service
import { CardService } from '../../service/card.service';

//Validators
import { onlyNumberValidator } from '../validators/custom-validator';

//Components
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [ReactiveFormsModule, ErrorComponent, NgxMaskDirective, NgIf, NgClass],
  providers: [provideNgxMask()],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.scss',
})
export class CardFormComponent implements DoCheck{
  public cardForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    number: ['', [Validators.required, onlyNumberValidator]],
    expDateMonth: ['', [Validators.required, onlyNumberValidator]],
    expDateYear: ['', [Validators.required, onlyNumberValidator]],
    cvc: ['', [Validators.required, onlyNumberValidator]],
  });

  public formSubmit: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cardService: CardService
  ) {}

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

    this.cardService.setViewCardData(this.cardForm);
  }

  public validTouchedDirtyInputAndFormSubmited(fromControlName: string){
    return this.cardForm.get(fromControlName)?.dirty || this.cardForm.get(fromControlName)?.touched || this.formSubmit;
  }

  public submitCardForm(){

    if(this.cardForm.valid){
      this.cardService.setCard(this.cardForm);
      this.formSubmit = false;
      this.router.navigate(['/sucess']);
    } else {
      this.formSubmit = true;
    }
  }
}
