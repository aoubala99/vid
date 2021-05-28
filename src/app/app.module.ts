import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { CandidatCreateComponent } from './Candidats/candidat-create/candidat-create.component';
import { CandidatListComponent } from './Candidats/candidat-list/candidat-list.component';
import { VillesComponent } from './villes/villes.component';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { MenuComponent } from './view/menu/menu.component';
import { PageNotFoundedComponent } from './view/page-not-founded/page-not-founded.component';
import {AppRoutingModule, components} from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CandidatsComponent,
    CandidatCreateComponent,
    CandidatListComponent,
    components,
    VillesComponent,
    ViewComponent,
    MenuComponent,
    PageNotFoundedComponent
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
