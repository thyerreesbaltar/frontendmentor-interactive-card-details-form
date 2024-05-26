import { AbstractControl } from "@angular/forms";

export function onlyNumberValidator(control: AbstractControl) {

  const value = Number(control.value);
  if(isNaN(value)){
    return {
      notIsNumber: true
    }
  }
  return null
}
