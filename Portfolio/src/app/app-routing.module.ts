import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent }
  /*{ path: '/quemsou', component: QuemSouComponent },
  { path: '/meusprojetos', component: MeusProjetosComponent },
  { path: '/empresas', component: EmpresasComponent },
  { path: '/contato', component: ContatoComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
