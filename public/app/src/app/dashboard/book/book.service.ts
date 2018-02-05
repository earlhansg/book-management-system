import { Injectable } from '@angular/core';

import { Http, Headers, Response  } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class BookService {
  headers: Headers;
  options: RequestOptions;
// Already added to master
  constructor( private http: HttpClient ) {
    this.headers = new Headers({ 'Content-Type': 'application/json',
                                     'Accept': 'q=0.8;application/json;q=0.9' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  get() {
    return this.http.get<any>('http://localhost:3000/books');
  }
  updateBook(url: string, param: any): Observable<any> {
    let body = JSON.stringify(param);
    return this.http
        .put(url, body, this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  private extractData(res: Response) {
        let body = res.json();
        return body || {};
  }

  private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
  }

}
