
import { Inject, Injectable } from '@angular/core';

import {Headers, RequestOptions } from '@angular/http';


@Injectable()
export class ConfigService {

  constructor() {}

  getHeaders(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return options;
  }
}
