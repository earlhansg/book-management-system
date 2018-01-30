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

  form: FormGroup;

  student_id = new FormControl('',  Validators.required);
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
    private alertService: AlertService) { }

  ngOnInit() {
    this.buildForm();
  }

}
