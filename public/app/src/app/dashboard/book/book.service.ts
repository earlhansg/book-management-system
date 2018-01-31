import { Injectable } from '@angular/core';

import { Http, Headers, Response  } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

  constructor( private http: HttpClient ) { }

  get() {
    return this.http.get<any>('http://localhost:3000/books');
  }

}
