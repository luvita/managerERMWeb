import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatListModule, MatGridListModule,
  MatMenuModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatTabsModule,
  MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { EcommerceProductComponent } from './ecommerce-product/ecommerce-product.component';
import { EcommerceProductDetailComponent } from './ecommerce-product-detail/ecommerce-product-detail.component';
import { EcommerceCartComponent } from './ecommerce-cart/ecommerce-cart.component';
import { EcommerceCheckoutComponent } from './ecommerce-checkout/ecommerce-checkout.component';
import { EcommerceRoutes } from './ecommerce.routing';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatTabsModule,
    MatDialogModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forChild(EcommerceRoutes)
  ],
  declarations: [ 
    EcommerceProductComponent,
    EcommerceProductDetailComponent,
    EcommerceCartComponent,
    EcommerceCheckoutComponent
  ]
})

export class EcommerceDemoModule {}
