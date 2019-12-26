import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatIconModule, MatCardModule, MatButtonModule, MatListModule, MatProgressBarModule, MatMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BasicCardComponent } from './basic/basic-card.component';
import { ModernCardComponent } from './modern/modern-card.component';

import { CardsRoutes } from './cards.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CardsRoutes),
     MatIconModule,

   FlexLayoutModule
  ],
  declarations: [ 
    BasicCardComponent,
    ModernCardComponent
  ]
})

export class CardsDemoModule {}
