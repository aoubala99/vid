import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployePageComponent} from './view/employe-page/employe-page.component';
import {ResponsablePageComponent} from './view/responsable-page/responsable-page.component';
import {AdminPageComponent} from './view/admin-page/admin-page.component';
import {EmployeManagementComponent} from './view/employe-management/employe-management.component';
import {ResponsableManagementComponent} from './view/responsable-management/responsable-management.component';
import {ChefManagementComponent} from './view/chef-management/chef-management.component';
import {AdminManagementComponent} from './view/admin-management/admin-management.component';
import {ClientManagementComponent} from './view/client-management/client-management.component';
import {UserManagementComponent} from './view/user-management/user-management.component';

export const components = [EmployeManagementComponent, ResponsableManagementComponent, ChefManagementComponent , AdminManagementComponent , ClientManagementComponent , UserManagementComponent];

const routes: Routes = [
  { path: 'employe-management', component: components[0]},
  { path: 'responsable-management', component: components[1]},
  { path: 'chef-management', component: components[2]},
  { path: 'admin-management', component: components[3]},
  { path: 'client-management', component: components[4]},
  { path: 'user-management', component: components[5]},
  { path: '' , component: components[0]},
  { path: '**', component: AdminPageComponent
  }

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
