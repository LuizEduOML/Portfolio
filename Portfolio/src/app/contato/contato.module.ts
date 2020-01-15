import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoComponent } from './contato.component';
import { MatCommonModule, MatButtonModule, MatIconModule } from '@angular/material';



@NgModule({
  declarations: [ContatoComponent],
  imports: [
    CommonModule,
    MatCommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[ContatoComponent]
})
export class ContatoModule { }
