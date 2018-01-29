import { Injectable } from '@angular/core';

import { Http, Headers, Response  } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { User } from './user.model';

@Injectable()
export class UserService {

  constructor( private http: HttpClient ) { }

  create( user: User) {
    return this.http.post<any>('http://localhost:3000/users', user);
  }
}
