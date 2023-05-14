import { AbstractControl, ValidationErrors, ValidatorFn, Validators, FormControl } from '@angular/forms';

/**
 * @description The purpose of custom validator is mainly to add custom message here rather than in the html
 * Along the line I found out more interesting things I could do with this
 * Simply visit the file to find out more
 */
export class CustomValidator {

  /**
   * @description — Validator that requires the control have a non-empty value.
   * @param visibleFieldName The field name to attached the error message to
   */
  static CustomRequired(visibleFieldName: string): ValidatorFn {
    return (c: AbstractControl) => {
      const result  = Validators.required(c);

      if (!result) {
          return null;
      }

      return {...result, message: `${visibleFieldName} is required`};
    };
  }

  /**
   * @description — Validator that requires the length of the control's value to be less than or equal to the provided maximum length.
   * This validator is also provided by default if you use the the HTML5 maxlength attribute.
   * @param maxLength The maximum length of the string
   */
  static MaxLength(maxLength: number): ValidatorFn {
    return (c: AbstractControl) => {
      const result  = Validators.maxLength(maxLength)(c);

      if (!result) {
          return null;
      }

      return {...result, message: `Not more than ${maxLength} characters`};
    };
  }

  /**
   * @description — Validator that requires the length of the control's value to be greater than or equal to the provided minimum length.
   * This validator is also provided by default if you use the the HTML5 minlength attribute.
   * @param minLength The minimum length of the string
   */
  static MinLength(minLength: number): ValidatorFn {
    return (c: AbstractControl) => {
      const result  = Validators.minLength(minLength)(c);

      if (!result) {
          return null;
      }

      return {...result, message: `Not less than ${minLength} characters`};
    };
  }

}
