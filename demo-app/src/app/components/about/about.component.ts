import { Component, OnInit, AfterViewChecked, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NonNullableFormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit, AfterViewChecked, DoCheck {
  contactForm = this.fb.group({
    fullName: '',
    email: '',
    phone: '',
  });

  id = '';

  constructor(
    private route: ActivatedRoute,
    private fb: NonNullableFormBuilder
  ) {}

  ngOnInit(): void {
    console.log('init');

    this.contactForm.setValue({
      fullName: 'Bob Smith',
      email: 'bob.smith@sometestdomain.wk',
      phone: '123-123-1234',
    });
  }

  ngDoCheck() {
    console.log('do check');
    this.id = this.route.snapshot.params['id'];
  }

  ngAfterViewChecked(): void {
    console.log('after view');
  }

  submitForm() {
    console.log(this.contactForm.value);
  }
}
