import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre-mim', component: SobreMimComponent },
  /*{ path: '/projetos', component: ProjetosComponent },
  { path: '/empresas', component: EmpresasComponent },*/
  { path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
