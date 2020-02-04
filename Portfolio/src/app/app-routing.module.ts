import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { ContatoComponent } from './contato/contato.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre-mim', component: SobreMimComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
