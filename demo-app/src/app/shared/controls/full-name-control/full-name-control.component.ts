import { Component, OnInit, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  FormBuilder,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-full-name-control',
  templateUrl: './full-name-control.component.html',
  styleUrls: ['./full-name-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => FullNameControlComponent),
    },
  ],
})
export class FullNameControlComponent implements OnInit, ControlValueAccessor {
  fullNameForm!: FormGroup;

  // private _onChange!: (fullName: {
  //   firstName: string;
  //   lastName: string;
  // }) => void;

  private _onChange!: (fullName: string) => void;

  private _onTouched!: () => void;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.fullNameForm = this.fb.group({
      firstName: '',
      lastName: '',
    });
  }

  writeValue(fullName: string): void {
    const [firstName, lastName] = fullName.split(' ');

    this.fullNameForm.get('firstName')!.setValue(firstName);
    this.fullNameForm.get('lastName')!.setValue(lastName);
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.fullNameForm.get('firstName')!.disable();
      this.fullNameForm.get('lastName')!.disable();

      // this.fullNameForm.disable();
    } else {
      this.fullNameForm.get('firstName')!.enable();
      this.fullNameForm.get('lastName')!.enable();

      // this.fullNameForm.enable();
    }
  }

  doInput() {
    const { firstName, lastName } = this.fullNameForm.value;
    this._onChange(`${firstName} ${lastName}`);
    // this._onChange(this.fullNameForm.value);
  }

  doBlur() {
    this._onTouched();
  }
}
