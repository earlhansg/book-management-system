import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  form: FormGroup;

  username = new FormControl('',  Validators.required);
  password = new FormControl('',  Validators.required);
  firstname = new FormControl('',  Validators.required);
  lastname = new FormControl('',  Validators.required);
  email = new FormControl('',  Validators.required);

  model: any = {};
  title: String;

  loaderVisible: boolean = false;
  constructor() { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      'name':   this.name,
      'address': this.address,
      'country': this.country,
      'phone_number': this.phone_number,
      'website': this.website,
      'email': this.email
    });
  }


}
