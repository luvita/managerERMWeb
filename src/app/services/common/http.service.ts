import { Injectable } from '@angular/core';
import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

import 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Module } from '../../config/app.config';

@Injectable()
export class HttpService extends Http {

  constructor(
    backend: XHRBackend,
    defaultOptions: RequestOptions,
    private router: Router
  ) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    if (typeof url === 'string') {
      if (!options) {
        options = { headers: new Headers() };
      }
      this.setHeaders(options);
    } else {
      this.setHeaders(url);
    }

    return super.request(url, options).catch(this.catchErrors());
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    if (typeof url === 'string') {
      if (!options) {
        options = { headers: new Headers() };
      }
      this.setHeaders(options);
    } else {
      this.setHeaders(url);
    }

    return super.get(url, options).catch(this.catchErrors());
  }

  getOptions() {
    const headers = new Headers(
      {
        'Authorization': 'Bearer ',
        'Module': Module,
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*',
      },
    );
    return new RequestOptions({ headers: headers });
  }

  getJsonHeaders() {
    return new Headers(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ',
        'Module': Module,
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*',
      });
  }

  private catchErrors() {
    return (res: Response) => {
      if (res.status === 401 || res.status === 440) {
        //this.router.navigate(['/login']);
      }

      return throwError(res);
    };
  }

  private setHeaders(objectToSetHeadersTo: Request | RequestOptionsArgs) {
    //objectToSetHeadersTo.headers.set('Token', this.authService.token);

  }
}
