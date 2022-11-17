import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversiteComponent } from 'app/Admin/UniversiteManegment/universite/universite.component';

const routes: Routes = [
  {path:'', component:UniversiteComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
