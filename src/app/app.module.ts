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


@NgModule({
  declarations: [
    AppComponent,
    components,
    ViewComponent,
    ChefPageComponent,
    AdminPageComponent,
    LoginPageComponent,
    ResponsablePageComponent
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
