import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { UniversiteComponent } from "./Admin/UniversiteManegment/universite/universite.component";
import { ListThreadComponent } from "./Admin/Forum/Thread/list-thread/list-thread.component";
import { ListReponseComponent } from "./Admin/Forum/Reponse/list-reponse/list-reponse.component";
import { ForumComponent } from "./Admin/Forum/forum/forum.component";
import { DetailsThreadComponent } from "./Admin/Forum/Thread/details-thread/details-thread.component";

const routes: Routes = [
  {path: "",redirectTo: "dashboard",pathMatch: "full",},
  {path: "Equipes",component: AdminLayoutComponent,children: [{path: "",loadChildren: ()=>
          import("./Admin/EquipesManagment/equipes-admin/equipes-admin.module").then((m) => m.EquipesAdminModule),},],
  },

  {path: "Projets",component: AdminLayoutComponent,children: [{path: "",loadChildren: ()=>
        import("./Admin/projets/projets.module").then((m) => m.ProjetsModule),},],
  },
/*
  {path: "Universite",component: AdminLayoutComponent,children: [{path: "",loadChildren: () =>
          import("./Admin/UniversiteManegment/universite-Module/universite.module").then((m) => m.UniversiteModule),},],
  },
*/
  {path: "Universite",component: AdminLayoutComponent,children: [{path: "",loadChildren: () =>
          import("./Admin/universite/universite.module").then((m) => m.UniversiteModule),},],
  },

  {path: "",component: AdminLayoutComponent,children: [{path: "",loadChildren: () =>
          import("./layouts/admin-layout/admin-layout.module").then((m) => m.AdminLayoutModule),},],
  },

  {path: "Forum",component: AdminLayoutComponent,children: [{path: "all",component: ForumComponent,},
    {path: "all/thread",component: ListThreadComponent,},
  {path: "all/reponse",component: DetailsThreadComponent,}],
  },
  
];
 
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
