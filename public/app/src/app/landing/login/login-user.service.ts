import { Injectable } from '@angular/core';

import { Http, Headers, Response  } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { Credentials } from './login.model';


@Injectable()
export class LoginUserService {
  public token: String;

  constructor( private http: HttpClient) {
    //  set token if saved in local storage
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.token = currentUser && currentUser.token;
  }

  login(user: Credentials){
    return this.http.post<any>('http://localhost:3000/users/authenticate', user)
    .map((user_account ) => {
      // login successful if there's a jwt token in the response
        let token = user_account.token;
        let username = user_account.username;
        let id = user_account.userId;
      if(token){
        // set token property
        this.token = token;
        // store username and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token, id: id }));
        // return true to indicate successful login
        return true;
      }
      else {
        // return false to indicate failed login
        return false;
      }
    });
  }

  logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }

}
