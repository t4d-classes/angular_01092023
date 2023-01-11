import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewColor } from '../../models/colors';

import { createHexcodeValidator } from 'src/app/shared/validators/hexcodevalidator';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css'],
})
export class ColorFormComponent implements OnInit {
  @Input()
  buttonText = 'Submit Color';

  @Output()
  submitColor = new EventEmitter<NewColor>();

  colorForm!: FormGroup;

  get showColorNameError() {
    const colorNameControl = this.colorForm.get('name');
    return colorNameControl?.errors?.['required'] && colorNameControl?.touched;
  }

  get hexCodeErrors() {
    return this.colorForm.get('hexcode')?.errors;
  }

  // private fb: FormBuilder;
  // constructor(fb: FormBuilder) {
  //   this.fb = fb;
  // }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.colorForm = this.fb.group({
      name: ['', { validators: [Validators.required] }],
      hexcode: [
        '',
        { validators: [Validators.required, createHexcodeValidator(6)] },
      ],
    });
  }

  doSubmitColor() {
    this.submitColor.emit(this.colorForm.value);

    this.colorForm.get('name')?.touched;
  }
}
