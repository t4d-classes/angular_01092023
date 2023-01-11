import { AbstractControl, ValidationErrors } from '@angular/forms';

export function createHexcodeValidator(hexcodeLength = 6) {
  return function hexcodeValidator(
    control: AbstractControl<string | null>
  ): ValidationErrors | null {
    const regexp = new RegExp(`^[a-fA-F0-9]{${hexcodeLength}}$`);

    const hexcodeValue = control.value ?? '';

    if (!hexcodeValue) {
      return null; // validation passes
    }

    if (!regexp.test(hexcodeValue)) {
      // validation fails, update errors object with hexcode property
      return {
        hexcode: true,
        hexcodeExpectedLength: hexcodeLength,
        hexcodeActualLength: hexcodeValue.length,
        hexcodeValue: hexcodeValue,
      };
    }

    return null; // validation passes
  };
}
