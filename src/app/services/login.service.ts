import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AuthService } from './common/auth.service';

@Injectable()
export class LoginService {
    constructor(
        public translate: TranslateService,
        private router: Router,
        private authService: AuthService
    ) { }

    // async login(authModel: AuthModel) {
    //     const res = await this.authService.login(authModel);
    //     if (res.result.companyList && res.result.companyList.length === 1) {
    //         localStorage.setItem('company_id', res.result.companyList[0].id);
    //         localStorage.setItem('company_list', JSON.stringify(res.result.companyList));
    //     } else {
    //         localStorage.setItem('company_list', JSON.stringify(res.result.companyList));
    //     }
    // }

    // async loginAdmin(authModel: AuthModel) {
    //     const res = await this.authService.login(authModel);
    //     if (res.result.companyList && res.result.companyList.length === 1) {
    //         localStorage.setItem('company_list', JSON.stringify(res.result.companyList));
    //         this.router.navigate([NavigateRouting.Admin, NavigateRouting.Relative]);
    //     } else {
    //         localStorage.setItem('company_list', JSON.stringify(res.result.companyList));
    //         this.router.navigate([NavigateRouting.Admin, NavigateRouting.ChooseCompany]);
    //     }
    // }
}
