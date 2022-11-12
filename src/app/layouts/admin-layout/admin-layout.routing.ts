import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { EquipesComponent } from 'app/Admin/equipes/equipes.component';
import { ListThreadComponent } from 'app/Admin/Forum/Thread/list-thread/list-thread.component';

import {EquipesAdminManagmentComponent} from '../../Admin/EquipesManagment/equipes-admin-managment/equipes-admin-managment.component';

import { TacheComponent } from 'app/Admin/tache/tache.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'Equipes',        component: EquipesComponent },
    { path: 'Forum',        component: ListThreadComponent }


];
