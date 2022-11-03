import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetModuleRoutingModule } from './projet-module-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { GetProjetsComponent } from '../get-projets/get-projets.component';
import { AddProjetComponent } from '../add-projet/add-projet.component';
import { DetailsProjetComponent } from '../details-projet/details-projet.component';
import { UpdateProjetComponent } from '../update-projet/update-projet.component';




const routes: Routes = [
{ path: '', component: GetProjetsComponent },
{ path: 'add', component: AddProjetComponent },
{ path: 'detail', component: DetailsProjetComponent },
{ path: 'update', component: UpdateProjetComponent }
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ProjetModuleRoutingModule
  ],
  exports: [RouterModule]
})
export class ProjetModuleModule { }