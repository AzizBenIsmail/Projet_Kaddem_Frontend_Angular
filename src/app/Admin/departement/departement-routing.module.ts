import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlldepartementComponent } from './alldepartement/alldepartement.component';

const routes: Routes = [
  {path:'', component:AlldepartementComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementRoutingModule { }
