import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ApiService } from './api.service';
import { ApiApplication } from '../../config/app.config';
import { Router } from '@angular/router';

@Injectable()
export class AuthService extends ApiService {
    private urlController: string;
    constructor(http: HttpService, private _router: Router) {
        super(ApiApplication.API_TEMP.controller, http, _router);
        this.urlController = ApiApplication.API_TEMP.controller;
    }

    // loadMenu() {

    // }

    // async login(loginModel: AuthModel): Promise<any> {
    //     return await this.post(ApiApplication.API_TEMP.controller + '/' + ApiApplication.API_TEMP.login,
    //         {
    //             email: loginModel.email.toString().trim(),
    //             password: loginModel.password,
    //             // organizationCode: loginModel.organizationCode,
    //         }).toPromise();
    // }

    // logggedIn() {
    //     return !!localStorage.getItem(LocalStorageKey.TOKEN);
    // }

    // getToken() {
    //     const token = localStorage.getItem(LocalStorageKey.TOKEN);
    //     if (token) {
    //         return token;
    //     }
    //     return null;
    // }

    // getPermissionByCompany(userId: number, companyId: number) {
    //     return this.post(this.urlController + ApiApplication.Auth.permission, { staffId: userId, companyId: companyId });
    // }
}
