import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UniversiteComponent } from './Admin/universite/universite.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'Equipes',
    component: AdminLayoutComponent,

    children: [

        {
      path: '',
      loadChildren: () => import('./Admin/EquipesManagment/equipes-admin/equipes-admin.module').then(m => m.EquipesAdminModule)
    }

    ]
  }
  , {
    path: 'Universite',
    component: AdminLayoutComponent,

    children: [

        {
      path: '',
      loadChildren: () => import('./Admin/UniversiteManegment/universite/universite.module').then(m => m.UniversiteModule)
    }

    ]
  }
  ,
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
