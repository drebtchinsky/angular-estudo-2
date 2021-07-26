import { AbstractControl } from '@angular/forms';

export function minusculoValidator(control: AbstractControl) {
  const value = control.value as string;
  if (value !== value.toLocaleLowerCase()) {
    return { minusculo: true };
  }

 return null;
}
