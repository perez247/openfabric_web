import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IServerFormError } from '../../models/server-form-error';
import { ToastService } from '../toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class FormErrorService {

  constructor() { }

  getError(form: FormGroup, field: string): string {
    if (!form) { return ''; }

    if (!form.get(field)) { return ''; }

    if (
      (form.get(field)?.touched && form.get(field)?.invalid) ||
      (form.get(field)?.hasError('serverError'))
      ) {
        return form.get(field)?.errors?.['message'];
        // console.log(errorMessage);
      } else {
        return '';
      }
  }

  setFormErrors(error: any, reactiveForm?: FormGroup): void {

    // Get the error part
    const formErrors = error?.error?.errorList as IServerFormError[];

    // If no errors then just return
    if (!formErrors || formErrors.length == 0) { return; }

    // For storing general error
    const generalError: string[] = [];

    // Get the first onces and place in the form control
    formErrors.forEach((error) => {

      // Check if props actually exists in form all neccessaries should be include
      if (reactiveForm && error.field in reactiveForm.controls) {
        reactiveForm.controls[error.field].setErrors( { message: error.message, serverError: true  } );
      } else {
        // Store the last one in the variable only for developers to see
        generalError.push(error.message);
      }

    });

    if (generalError.length > 0) {
      throw generalError[0];
    }

  }

}
