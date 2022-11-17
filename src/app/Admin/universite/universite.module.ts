import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversiteRoutingModule } from './universite-routing.module';
import { AllUniversiteComponent } from './all-universite/all-universite.component';


@NgModule({
  declarations: [
    AllUniversiteComponent
  ],
  imports: [
    CommonModule,
    UniversiteRoutingModule
  ]
})
export class UniversiteModule { }
