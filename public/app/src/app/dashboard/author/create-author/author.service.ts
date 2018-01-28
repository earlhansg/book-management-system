import { Injectable } from '@angular/core';

import { Http, Headers, Response  } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { Credentials } from './author.model';


@Injectable()
export class AuthorService {

  constructor( private http: HttpClient) {
  }

  create(author : Credentials) {
    return this.http.post<any>('http://localhost:3000/authors', author);
  }



}
