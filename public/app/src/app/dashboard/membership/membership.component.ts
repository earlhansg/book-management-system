import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import { MembershipService } from './membership.service';
import { AlertService } from '../alert/alert.service';

import { Student } from './student.model';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css'],
  providers: [MembershipService]
})
export class MembershipComponent implements OnInit {

  public userData: any;
  public userToken: any;
  public userJson: any;
  public userid: any;

  form: FormGroup;

  id = new FormControl('',  Validators.required);
  user_id = new FormControl('',  Validators.required);
  firstname = new FormControl('', Validators.required);
  lastname = new FormControl('', Validators.required);
  middlename = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);

  model: any = {};
  title: String;

  loaderVisible: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private membershipService: MembershipService,
    private alertService: AlertService) {
      this.userData = localStorage.getItem("currentUser");
      this.userJson = JSON.parse(this.userData);
      this.userid = this.userJson.id;

      if(this.userJson != null ) {
        this.userJson = JSON.parse(this.userData);
        this.userToken= this.userJson.token;
      }
      console.log(this.userJson);
    }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {

    this.form = this.fb.group({
      'id':   this.id,
      'user_id': this.userid,
      'firstname': this.firstname,
      'lastname': this.lastname,
      'middlename': this.middlename,
      'email': this.email
    });
  }


  create(student: Student){

    this.membershipService.create(student).subscribe(
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
