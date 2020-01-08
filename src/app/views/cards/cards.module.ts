import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'

import { BasicCardComponent } from './basic/basic-card.component'
import { ModernCardComponent } from './modern/modern-card.component'
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { CardsRoutes } from './cards.routing'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CardsRoutes),
    MatIconModule,
    MatSelectModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatButtonModule
  ],
  declarations: [BasicCardComponent, ModernCardComponent]
})
export class CardsDemoModule {}
