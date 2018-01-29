import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import { UserService } from './user.service';
import { AlertService } from '../alert/alert.service';

import { User } from './user.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  form: FormGroup;

  username = new FormControl('',  Validators.required);
  password = new FormControl('',  Validators.required);
  firstname = new FormControl('',  Validators.required);
  lastname = new FormControl('',  Validators.required);
  middlename = new FormControl('',  Validators.required);
  email = new FormControl('',  Validators.required);

  model: any = {};
  title: String;

  loaderVisible: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      'username':   this.username,
      'password': this.password,
      'firstname': this.firstname,
      'lastname': this.lastname,
      'middlename': this.middlename,
      'email': this.email
    });
  }

  create(user: User){

    this.userService.create(user).subscribe(
      response => {
        this.alertService.success('Registration successful', true);
        this.form.reset();
      },
      error => {
        this.alertService.error(error);
        this.loaderVisible = false
      }
    );
  }


}
