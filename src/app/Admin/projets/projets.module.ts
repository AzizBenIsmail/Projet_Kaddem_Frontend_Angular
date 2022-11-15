import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetsRoutingModule } from './projets-routing.module';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { UpdateTacheComponent } from './update-tache/update-tache.component';
import { GetTachesComponent } from './get-taches/get-taches.component';
import { GetProjetsComponent } from './get-projets/get-projets.component';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { AddTacheComponent } from './add-tache/add-tache.component';


@NgModule({
  declarations: [
    UpdateProjetComponent,
    UpdateTacheComponent,
    GetTachesComponent,
    GetProjetsComponent,
    AddProjetComponent,
    AddTacheComponent
  ],
  imports: [
    CommonModule,
    ProjetsRoutingModule
  ]
})
export class ProjetsModule { }
