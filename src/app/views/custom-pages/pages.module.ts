import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MatCardModule,
 
  MatInputModule,
  MatRadioModule,
  MatButtonModule,
  MatProgressBarModule,
  MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';



import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlankComponent } from './blank/blank.component';

import { PagesRoutes } from './pages.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
     
FormsModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
   FlexLayoutModule
  ],
  declarations: [ 
    AboutComponent,
    ContactComponent,
    TimelineComponent,
    PricingComponent,
    BlankComponent,
  ]
})

export class PagesDemoModule {}
