import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlankComponent } from './blank/blank.component';

export const PagesRoutes: Routes = [{
  path: '',
  redirectTo: 'about',
  pathMatch: 'full',
},{
  path: '',
  children: [{
    path: 'about',
    component: AboutComponent
  }, {
    path: 'contact',
    component: ContactComponent
  }, {
    path: 'timeline',
    component: TimelineComponent
  }, {
    path: 'pricing',
    component: PricingComponent
  }, {
    path: 'blank',
    component: BlankComponent
  }]
}];
