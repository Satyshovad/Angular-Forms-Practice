import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-task1-model-driven-forms',
  templateUrl: './task1-model-driven-forms.component.html',
  styleUrls: ['./task1-model-driven-forms.component.css']
})
export class Task1ModelDrivenFormsComponent implements OnInit {

  constructor() { }
  SignupForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log('It\'s work');
  }
}
