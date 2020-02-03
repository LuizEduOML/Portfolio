import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { ContatoModule } from './contato/contato.module';
import { SobreMimModule } from './sobre-mim/sobre-mim.module';
import { EmpresasModule } from './empresas/empresas.module';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HomeModule,
    ContatoModule,
    SobreMimModule,
    EmpresasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
