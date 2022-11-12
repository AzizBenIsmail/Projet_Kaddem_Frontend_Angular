import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversiteComponent } from 'app/Admin/UniversiteManegment/universite/universite.component';
import { AddUniversiteComponent } from '../add-universite/add-universite.component';

const routes: Routes = [
  {path:'', component:UniversiteComponent},
  {path:'AddUniversite', component:AddUniversiteComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
