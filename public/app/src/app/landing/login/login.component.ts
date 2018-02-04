import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import { LoginUserService } from './login-user.service';

import { Credentials } from './login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  username = new FormControl('',  Validators.required);
  password = new FormControl('', Validators.required);

  model: any = {};
  title: String;

  loaderVisible: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private loginService: LoginUserService) { }

  ngOnInit() {
    this.buildForm();
    this.loginService.logout();
  }

  buildForm(): void {
		this.form = this.fb.group({
			'username':   this.username,
			'password':   this.password
		});
  }


  login(user: Credentials) {
		this.loaderVisible = true;


		this.loginService.login(user).subscribe(
			response => {
        this.router.navigate(['dashboard']);
      },
			error => {
        this.loaderVisible = false
      }
		);
  }



}
