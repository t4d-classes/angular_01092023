import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewCar } from '../../models/cars';
import {
  createAllowedValuesValidator,
  isAllowedValuesError,
  allowedValuesErrorMessage,
  AllowedValuesErrorInfo,
} from 'src/app/shared/validators/allowedValuesValidator';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css'],
})
export class CarFormComponent implements OnInit {
  @Input()
  buttonText = 'Submit Car';

  carForm!: FormGroup;

  @Output()
  submitCar = new EventEmitter<NewCar>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.carForm = this.fb.group({
      make: [
        '',
        {
          validators: [
            createAllowedValuesValidator(['Ford', 'Tesla', 'Toyota']),
          ],
        },
      ],
      model: '',
      year: [
        1900,
        {
          validators: [
            Validators.required,
            Validators.min(1886),
            Validators.max(new Date().getFullYear()),
          ],
        },
      ],
      color: '',
      price: [0, { validators: [Validators.required, Validators.min(1)] }],
    });

    console.log(this.carForm.controls);
  }

  get carFormErrors() {
    return Object.keys(this.carForm.controls).reduce(
      (errorsList: string[], controlName: string) => {
        const controlErrors = this.carForm.get(controlName)?.errors;

        if (controlErrors) {
          if (controlErrors?.['required']) {
            errorsList.push(`${controlName} is required`);
          }
          if (isAllowedValuesError(controlErrors)) {
            errorsList.push(
              allowedValuesErrorMessage(controlName, controlErrors)
            );
          }
        }
        return errorsList;
      },
      [] as string[]
    );
  }

  doSubmitCar() {
    this.submitCar.emit(this.carForm.value);
  }
}
