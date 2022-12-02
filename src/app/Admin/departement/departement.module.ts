import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementRoutingModule } from './departement-routing.module';
import { AlldepartementComponent } from './alldepartement/alldepartement.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { UpdatedepartementComponent } from './updatedepartement/updatedepartement.component';


@NgModule({
  declarations: [
    AlldepartementComponent,
    AddDepartementComponent,
    UpdatedepartementComponent
  ],
  imports: [
    CommonModule,
    DepartementRoutingModule
  ]
})
export class DepartementModule { }
