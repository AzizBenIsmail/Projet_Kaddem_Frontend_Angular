import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { TComponent } from './t/t.component';
import { EquipesComponent } from './Admin/equipes/equipes.component';
import { EquipeService } from './Services/ServicesEquipes/equipe.service';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {AdminLayoutModule} from './layouts/admin-layout/admin-layout.module';
import { ProjetComponent } from './Admin/projet/projet.component';
import { TacheComponent } from './Admin/tache/tache.component';
import { ProjetService } from './Services/ProjetService/projet.service';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import { EquipesAdminModule } from './Admin/EquipesManagment/equipes-admin/equipes-admin.module';
import { EquipesAdminManagmentComponent } from './Admin/EquipesManagment/equipes-admin-managment/equipes-admin-managment.component';
import { UpdateEquipeComponent } from './Admin/EquipesManagment/update-equipe/update-equipe.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ConfirmDialogComponent } from './Admin/EquipesManagment/confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { DetailEquipeAdminManagmentComponent } from './Admin/EquipesManagment/detail-equipe-admin-managment/detail-equipe-admin-managment.component';
import { UniversiteserviceService } from './Services/ServicesUniversite/universiteservice.service';
import { UniversiteComponent } from './Admin/universite/universite.component';
import { UniversiteModule } from './Admin/UniversiteManegment/universite/universite.module';
import { AddUniversiteComponent } from './Admin/UniversiteManegment/add-universite/add-universite.component';
import { AddEquipeComponent } from './Admin/EquipesManagment/add-equipe/add-equipe.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        MatIconModule,
        MatButtonModule,
        AdminLayoutModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatChipsModule,
        NgbModule,
        EquipesAdminModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatDialogModule,
        MatTableModule,
        MatInputModule,
        UniversiteModule
       

    ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    TComponent,
    EquipesComponent,
    ProjetComponent,
    TacheComponent,
    TComponent,
    EquipesComponent,
    EquipesAdminManagmentComponent,
    UpdateEquipeComponent,
    AddEquipeComponent,
    ConfirmDialogComponent,
    DetailEquipeAdminManagmentComponent,
    UniversiteComponent,
    AddUniversiteComponent,

  ],
  providers: [EquipeService,ProjetService],
  bootstrap: [AppComponent]
})
export class AppModule { }