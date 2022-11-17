import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import { RecupererUnivComponent } from './recuperer-univ/recuperer-univ.component';


@NgModule({
  declarations: [
    RecupererUnivComponent
  ],
  imports: [
    CommonModule,
    UniversiteRoutingModule
  ]
})
export class UniversiteModule { }
