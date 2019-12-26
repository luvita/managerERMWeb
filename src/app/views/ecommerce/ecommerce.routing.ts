import { Routes } from '@angular/router';

import { EcommerceProductComponent } from './ecommerce-product/ecommerce-product.component';
import { EcommerceProductDetailComponent } from './ecommerce-product-detail/ecommerce-product-detail.component';
import { EcommerceCartComponent } from './ecommerce-cart/ecommerce-cart.component';
import { EcommerceCheckoutComponent } from './ecommerce-checkout/ecommerce-checkout.component';

export const EcommerceRoutes: Routes = [{
  path: '',
  redirectTo: 'ecommerce-product',
  pathMatch: 'full',
},{
  path: '',
  children: [{
    path: 'ecommerce-product',
    component: EcommerceProductComponent
  }, {
    path: 'ecommerce-product-detail',
    component: EcommerceProductDetailComponent
  }, {
    path: 'ecommerce-cart',
    component: EcommerceCartComponent
  }, {
    path: 'ecommerce-checkout',
    component: EcommerceCheckoutComponent
  }]
}];
