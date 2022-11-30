import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUniversiteComponent } from './add-universite/add-universite.component';
import { AllUniversiteComponent } from './all-universite/all-universite.component';

const routes: Routes = [
  {path:'', component:AllUniversiteComponent},
  {path:'add', component:AddUniversiteComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
