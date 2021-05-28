import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployePageComponent} from './view/employe-page/employe-page.component';
import {ResponsablePageComponent} from './view/responsable-page/responsable-page.component';
import {PageNotFoundedComponent} from './view/page-not-founded/page-not-founded.component';

export const components = [EmployePageComponent, ResponsablePageComponent];

const routes: Routes = [
  { path: 'employe-page', component: components[0]},
  { path: 'responsable-page', component: components[1]},
  { path: '' , component: components[0]},
  { path: '**', component: PageNotFoundedComponent
  }

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
