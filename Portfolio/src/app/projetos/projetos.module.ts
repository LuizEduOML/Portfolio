import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule, MatDividerModule } from '@angular/material';

import { ProjetosComponent } from './projetos.component';



@NgModule({
  declarations: [ProjetosComponent],
  imports: [
    CommonModule,
    MatCommonModule,
    MatDividerModule
  ],
  exports: [ProjetosComponent]
})
export class ProjetosModule { }
