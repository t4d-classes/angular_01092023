import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css'],
})
export class ColorFormComponent implements OnInit {
  colorForm!: FormGroup;

  // private fb: FormBuilder;
  // constructor(fb: FormBuilder) {
  //   this.fb = fb;
  // }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.colorForm = this.fb.group({
      name: '',
      hexcode: '',
    });
  }
}
