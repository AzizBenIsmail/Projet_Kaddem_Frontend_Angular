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
import {MatChipsModule} from '@angular/material/chips';


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
        MatChipsModule

    ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    TComponent,
    EquipesComponent,

  ],
  providers: [EquipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
