import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { GetProjetsComponent } from './get-projets/get-projets.component';
import { UpdateProjetComponent } from './update-projet/update-projet.component';



const routes: Routes = [

  { path: '', component: GetProjetsComponent },
  { path: 'add', component: AddProjetComponent },
  { path: 'update/:id', component: UpdateProjetComponent }
 
  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetsRoutingModule { }
