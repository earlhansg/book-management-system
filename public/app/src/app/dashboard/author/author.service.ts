import { Inject, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { ConfigService } from '../../shared/services/config.service';


// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthorService {

  url: string;
  headers: any;

// Already added to master
  constructor(private http: Http,
              private configService: ConfigService,
              @Inject('API_URL') private apiUrl: string) {

    this.url = `${apiUrl}/authors`;
    this.headers = this.configService.getHeaders();
  }

  getAuthor() {
    return this.http.get(this.url, this.headers)
               .map(this.extractData)
               .catch(this.handleError);
  }

  private extractData(res:Response) {
    let body = res.json();
    return body || [];
  }

  private handleError(error:any) {
       // In a real world app, we might use a remote logging infrastructure
       // We'd also dig deeper into the error to get a better message
       let errMsg = (error.message) ? error.message :
           error.status ? `${error.status} - ${error.statusText}` : 'Server error';
       console.error(errMsg); // log to console instead
       return Observable.throw(errMsg);
   }
}
