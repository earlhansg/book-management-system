import { Injectable } from '@angular/core';

import { Http, Headers, Response  } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Student } from './student.model';

@Injectable()
export class MembershipService {

  constructor( private http: HttpClient) { }

  create(student : Student) {
    return this.http.post<any>('http://localhost:3000/students', student);
  }

}
