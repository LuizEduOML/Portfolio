import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule, MatDividerModule } from '@angular/material';

import { SobreMimComponent } from './sobre-mim.component';



@NgModule({
  declarations: [SobreMimComponent],
  imports: [
    CommonModule,
    MatCommonModule,
    MatDividerModule
  ],
  exports: [SobreMimComponent]
})
export class SobreMimModule { }
