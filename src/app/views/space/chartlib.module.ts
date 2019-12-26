import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule, 
        MatTabsModule, 
        MatFormFieldModule, 
        MatCheckboxModule ,
        MatAutocompleteModule,
        MatGridListModule,
        MatIconModule,
        MatTableModule,
        MatInputModule,
      } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgxChartsModule} from '@swimlane/ngx-charts';
import { SpaceComponent}  from './space.component';
import { ChartlibRoutes } from './chartlib.routing';
import { SpaceTabNameComponent } from './space-tab-name/space-tab-name.component';
import { SpaceTabContentComponent } from './space-tab-content/space-tab-content.component';
import { SuggestionNamesComponent } from './suggestion-names/suggestion-names.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ChartlibRoutes),
    ChartsModule,
    NgxChartsModule,
    MatCardModule,
    FlexLayoutModule,
    MatTabsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
   ],
  declarations: [ 
    SpaceComponent,
    SpaceTabNameComponent,
    SpaceTabContentComponent,
    SuggestionNamesComponent
   ]
})

export class ChartlibModule {}
