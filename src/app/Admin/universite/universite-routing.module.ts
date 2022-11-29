import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversiteComponent } from '../UniversiteManegment/universite/universite.component';
import { AllUniversiteComponent } from './all-universite/all-universite.component';

const routes: Routes = [
  {path:'', component:AllUniversiteComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
