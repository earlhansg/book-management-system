import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import { AuthorService } from './author.service';
import { AlertService } from '../../alert/alert.service';


import { Credentials } from './author.model';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css'],
  providers: [AuthorService]
})
export class CreateAuthorComponent implements OnInit {

  form: FormGroup;

  name = new FormControl('',  Validators.required);
  address = new FormControl('', Validators.required);
  country = new FormControl('', Validators.required);
  phone_number = new FormControl('', Validators.required);
  website = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);

  model: any = {};
  title: String;

  loaderVisible: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private authorService: AuthorService,
    private alertService: AlertService) { }

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

  create(author: Credentials){

    this.authorService.create(author).subscribe(
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
