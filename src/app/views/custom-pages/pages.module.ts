import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatPaginatorModule,
  MatDatepickerModule,
  MatTableModule} from '@angular/material';
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
    FlexLayoutModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatTableModule,
  ],
  declarations: [ 
    AboutComponent,
    ContactComponent,
    TimelineComponent,
    PricingComponent,
    BlankComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class PagesDemoModule {}
