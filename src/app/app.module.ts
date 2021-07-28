import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { ChefPageComponent } from './view/chef-page/chef-page.component';
import { AdminPageComponent } from './view/admin-page/admin-page.component';
import {AppRoutingModule, components} from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './view/login-page/login-page.component';
import {ResponsablePageComponent} from './view/responsable-page/responsable-page.component';
import {EmployePageComponent} from './view/employe-page/employe-page.component';
import { ClientCreateComponent } from './view/client-management/client-create/client-create.component';
import { ClientListComponent } from './view/client-management/client-list/client-list.component';
import { EmployeListComponent } from './view/employe-management/employe-list/employe-list.component';
import { EmployeCreateComponent } from './view/employe-management/employe-create/employe-create.component';
import { ProjetComponent } from './view/chef-page/projet/projet.component';
import { ProjetListComponent } from './view/chef-page/projet/projet-list/projet-list.component';
import { ProjetCreateComponent } from './view/chef-page/projet/projet-create/projet-create.component';
import { ProjetStatueComponent } from './view/chef-page/projet/projet-statue/projet-statue.component';
import { AdminListComponent } from './view/admin-management/admin-list/admin-list.component';
import { AdminCreateComponent } from './view/admin-management/admin-create/admin-create.component';


@NgModule({
  declarations: [
    AppComponent,
    components,
    ViewComponent,
    ChefPageComponent,
    AdminPageComponent,
    LoginPageComponent,
    ResponsablePageComponent,
    EmployePageComponent,
    ClientCreateComponent,
    ClientListComponent,
    EmployeListComponent,
    EmployeCreateComponent,
    ProjetComponent,
    ProjetListComponent,
    ProjetCreateComponent,
    ProjetStatueComponent,
    AdminListComponent,
    AdminCreateComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
