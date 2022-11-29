import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ProjetsRoutingModule } from './projets-routing.module';

import { UpdateTacheComponent } from './update-tache/update-tache.component';
import { GetTachesComponent } from './get-taches/get-taches.component';

import { AddTacheComponent } from './add-tache/add-tache.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { GetProjetsComponent } from './get-projets/get-projets.component';
import { AddProjetComponent } from './add-projet/add-projet.component';



@NgModule({
  declarations: [
  
    UpdateTacheComponent,
    GetTachesComponent,
    GetProjetsComponent,
    AddProjetComponent,
    AddTacheComponent,
    UpdateProjetComponent,
  
  ],
  imports: [
    CommonModule,
    ProjetsRoutingModule,
    FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        
  ]
})
export class ProjetsModule { }
