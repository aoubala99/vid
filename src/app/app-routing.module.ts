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
import {LoginPageComponent} from './view/login-page/login-page.component';
import {ChefPageComponent} from './view/chef-page/chef-page.component';
import {AdminCreateComponent} from './view/admin-management/admin-create/admin-create.component';

// tslint:disable-next-line:max-line-length
export const components = [EmployeManagementComponent, ResponsableManagementComponent, ChefManagementComponent , AdminManagementComponent , ClientManagementComponent , UserManagementComponent, EmployePageComponent, ResponsablePageComponent, ChefPageComponent, AdminPageComponent ];

const routes: Routes = [
  { path: 'employe-management', component: components[0]},
  { path: 'responsable-management', component: components[1]},
  { path: 'chef-management', component: components[2]},
  { path: 'admin-management', component: components[3]},
  { path: 'client-management', component: components[4]},
  { path: 'user-management', component: components[5]},
  { path: 'employe-page' , component: components[6] },
  { path: 'responsable-page' , component: components[7] },
  { path: 'chef-page' , component: components[8] },
  { path: 'admin-page' , component: components[9] },
  { path: '**', component: LoginPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
