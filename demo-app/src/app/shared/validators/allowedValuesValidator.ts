import { AbstractControl, ValidationErrors } from '@angular/forms';

export type AllowedValuesErrorInfo = {
  allowedValues: boolean;
  controlValue: string;
  possibleValues: string[];
};

export function createAllowedValuesValidator(values: string[] = []) {
  return function allowedValuesValidator(
    control: AbstractControl<string | null>
  ): ValidationErrors | null {
    const controlValue = control.value ?? '';

    if (!values.includes(controlValue)) {
      return {
        allowedValues: true,
        controlValue,
        possibleValues: values,
      } as AllowedValuesErrorInfo;
    }

    return null; // validation passes
  };
}

export function isAllowedValuesError(errorInfo: any): errorInfo is AllowedValuesErrorInfo {
  return errorInfo.allowedValues;
}

export function allowedValuesErrorMessage(
  controlName: string,
  errorInfo: AllowedValuesErrorInfo
): string {
  return `Value '${errorInfo.controlValue}' for ${controlName} is not allowed.`;
}
