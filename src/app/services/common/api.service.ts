import { Request, RequestOptions, Response, Headers, RequestMethod } from '@angular/http';
import { Injectable } from '@angular/core';
import { Module, NavigateRouting, HttpStatus, ApiApplication } from '../../config/app.config';
import 'rxjs-compat/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/timeout';
import 'rxjs/Observable';
import { HttpService } from './http.service';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import 'rxjs/add/observable/of';

@Injectable()
export class ApiService {
    apiBaseController: string;
    private http: HttpService;
    private router: Router;
    constructor(urlController: string, http: HttpService, router: Router) {
        this.apiBaseController = urlController + '/';
        this.http = http;
        this.router = router;
    }

    /**
      * Funtion get: Get data by parameter
      * @param apiUrl
      * @param parameter
      */
    get(apiUrl: string = '', parameter: any = []) {
        parameter.forEach(p => {
            apiUrl += ('/' + p);
        });
        
        return this.http.get(apiUrl, this.getOptions()).map(
            (res: Response) => {
                return this.forwardData(res);
            }).catch((error) => {
                return this.forwardError(error);
            });
    }

    /** Funtion post: post data
     * @apiUrl URL reference to API
     */
    post(apiUrl: string = '', condition?: any) {
        const requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: apiUrl,
            headers: this.getJsonHeaders(),
            body: condition === undefined ? '' : JSON.stringify(condition),
        });

        return this.http.request(new Request(requestoptions)).map(
            (res: Response) => {
                return this.forwardData(res);
            }).catch(error => {
                return this.forwardError(error);
            });
    }

    /** Funtion put: put data
     * @apiUrl URL reference to API
     */
    put(apiUrl: string = '', condition?: any) {
        const requestoptions = new RequestOptions({
            method: RequestMethod.Put,
            url: apiUrl,
            headers: this.getJsonHeaders(),
            body: condition === undefined ? '' : JSON.stringify(condition),
        });

        return this.http.request(new Request(requestoptions)).map(
            (res: Response) => {
                return this.forwardData(res);
            }).catch(error => {
                return this.forwardError(error);
            });
    }

    /** Funtion post: post file
     * @apiUrl URL reference to API
     */
    postFiles(apiUrl: string = '', files?: any) {
        const formData: FormData = new FormData();

        for (let i = 0; i < files.length; i++) {
            formData.append('file', files[i]);
        }

        const headers = new Headers(
            {
                // 'Authorization': LocalStorageHelper.getToken(),
                'Module': Module,
                'X-Requested-With': 'XMLHttpRequest',
            },
        );

        const requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: apiUrl,
            headers: headers,
            body: formData,
        });

        return this.http.request(new Request(requestoptions))
            .map((res: Response) => {
                return this.forwardData(res);
            }).catch(error => {
                return this.forwardError(error);
            });
    }


    /** Funtion add: Add new data
     * @whale Model used add new
     * @apiUrl URL reference to API
     */
    add(apiUrl: string = '', whale) {
        const requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: (this.apiBaseController + apiUrl),
            headers: this.getJsonHeaders(),
            body: JSON.stringify(whale),
        });

        return this.http.request(new Request(requestoptions)).map(
            (res: Response) => {
                return this.forwardData(res);
            }).catch((error: any) => {
                return this.forwardError(error);
            });
    }

    /** Funtion update: Add new data
     * @whale Model used updated
     * @apiUrl URL reference to API
     */
    update(apiUrl: string = '', whale) {
        const requestOptions = new RequestOptions({
            method: RequestMethod.Put,
            url: apiUrl,
            headers: this.getJsonHeaders(),
            body: JSON.stringify(whale),
        });
        return this.http.request(new Request(requestOptions)).map(
            (res: Response) => {
                return this.forwardData(res);
            }).catch(error => {
                return this.forwardError(error);
            });
    }

    /** Funtion delete: Delete data by key
     * @apiUrl URL reference to API, this is contain key
     */
    delete(apiUrl: string = '', whale?: any) {
        const requestoptions = new RequestOptions({
            method: RequestMethod.Delete,
            url: (apiUrl),
            headers: this.getJsonHeaders(),
            body: (whale ? JSON.stringify(whale) : ''),
        });

        return this.http.request(new Request(requestoptions)).map(
            (res: Response) => {
                return this.forwardData(res);
            }).catch(error => {
                return this.forwardError(error);
            });
    }

    deleteWithParams(apiUrl: string = '', whale?: any) {
        const requestoptions = new RequestOptions({
            method: RequestMethod.Delete,
            url: (apiUrl + '/' + whale),
            headers: this.getJsonHeaders(),
            params: { ...whale },
        });

        return this.http.request(new Request(requestoptions)).map(
            (res: Response) => {
                return this.forwardData(res);
            })
            .catch(
                this._serverError,
            );
    }

    /** Funtion delete: Delete data by key
     * @apiUrl URL reference to API, this is contain key
     */
    delete_custom(apiUrl: string = '', whale?: any) {
        const requestoptions = new RequestOptions({
            method: RequestMethod.Delete,
            url: apiUrl,
            headers: this.getJsonHeaders(),
            body: (whale ? JSON.stringify(whale) : ''),
        });

        return this.http.request(new Request(requestoptions)).map(
            (res: Response) => {
                return this.forwardData(res);
            }).catch(
                this._serverError,
            );
    }

    private _serverError(err: any) {
        // this.postLogException(err);
        if (err instanceof Response) {
            if (Number(err.status) === HttpStatus.UNAUTHORIZED || Number(err.status) === HttpStatus.FORBIDDEN) {
                // this.router.navigate([NavigateRouting.NotFound]);
            } else {
                return Observable.throw(err.json().error || 'backend server error');
            }
        }
        return Observable.throw(err || 'backend server error');
    }

    /** Funtion search: Get data with condition from API
     * @apiUrl URL reference to API
     * @condition Search condition
     */
    search(apiUrl: string, condition: any) {
        const requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: (this.apiBaseController + apiUrl),
            headers: this.getJsonHeaders(),
            body: JSON.stringify(condition),
        });

        return this.http.request(new Request(requestoptions)).timeout(10000)
            .pipe().map((res: Response) => {
                return this.forwardData(res);
            })
            .catch(error => {
                return this.forwardError(error);
            });
    }

    /**
     * Get all model with paging
     * @param page Page index (begin index: 0)
     * @param size Number of records on one page
     * @param filterDeleted Not get deleted data if equals "true"
     * @param args[] custom parameter
     * @example this.{controller}Service.getList(0, 20).subscribe( (res)
     * => {console.log(res); let data = res.content;}, error {});
     */
    public getList(apiUrl: string, page: number, size: number, args: any[] = []) {
        return this.get(apiUrl, [size, page].concat(args));
    }

    /**
     * Get all model
     * @param condition Search condition
     * @param page Page index (begin index: 0)
     * @param size Number of records on one page
     * @param filterDeleted Not get deleted data if equals "true"
     * @example this.{controller}Service.seach(condition, 0, 20).subscribe( (res) => {console.log(res);}, error {});
     */
    public seachPaging(apiUrl: string, condition: any, page: number, size: number) {
        const url = apiUrl + size + '/' + page;
        return this.get(url, condition);
    }

    /**
     *
     * @param res
     * @param status
     */
    private forwardData(res: Response): any {
        if (Number(res.status) === 200) { // OK
            return this.convertResultData(res);
        } else if (Number(res.status) === 203) { // Redirect
            return this.convertResultData(res);
        } else { // Accept / Create
            return this.convertResultData(res);
        }
    }

    /**
     * Try to convert callback data to json/text/plain
     * @param {Response} res
     * @returns {any}
     */
    private convertResultData(res: Response): any {
        try {
            return { result: res.json(), status: res.status, message: 'successful' };
        } catch (e) {
            return { result: '', status: res.status, message: res.text };
        }
    }

    /**
    * Request Error handler
    * @param {Response} error
    * @param status
    * @returns {ErrorObservable}
    */
    forwardError(error: Response): any {
        // this.postLogException(error);
        if (Number(error.status) === HttpStatus.FORBIDDEN) {
            // this.router.navigate([NavigateRouting.NotFound]);
            return Observable.throw(error.statusText);
        } else {
            return throwError(error);
        }
    }

    /**
     *
     */
    getOptions() {
        const headers = new Headers(
            {
                // 'Authorization': LocalStorageHelper.getToken(),
                'Module': Module,
                'X-Requested-With': 'XMLHttpRequest',
                'Access-Control-Allow-Origin': '*',
                // 'UserId': localStorage.getItem(LocalStorageKey.STAFF_ID),
                // 'CompanyId': localStorage.getItem(LocalStorageKey.COMPANY_ID),
                // 'OrganizationId': LocalStorageHelper.getOrganizationId(),
            },
        );
        return new RequestOptions({ headers: headers });
    }

    /**
     *
     */
    getJsonHeaders() {
        return new Headers(
            {
                'Content-Type': 'application/json',
                // 'Authorization': LocalStorageHelper.getToken(),
                'Module': Module,
                'X-Requested-With': 'XMLHttpRequest',
                'Access-Control-Allow-Origin': '*',
                // 'UserId': localStorage.getItem(LocalStorageKey.STAFF_ID),
                // 'CompanyId': localStorage.getItem(LocalStorageKey.COMPANY_ID),
                // 'OrganizationId': LocalStorageHelper.getOrganizationId(),
            });
    }

}
