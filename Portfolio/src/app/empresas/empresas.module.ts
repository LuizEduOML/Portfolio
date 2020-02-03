import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule, MatDividerModule } from '@angular/material';

import { EmpresasComponent } from './empresas.component';



@NgModule({
  declarations: [EmpresasComponent],
  imports: [
    CommonModule,
    MatCommonModule,
    MatDividerModule
  ],
  exports: [EmpresasComponent]
})
export class EmpresasModule { }
