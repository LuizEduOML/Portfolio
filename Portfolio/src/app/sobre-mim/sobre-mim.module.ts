import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreMimComponent } from './sobre-mim.component';



@NgModule({
  declarations: [SobreMimComponent],
  imports: [
    CommonModule
  ],
  exports: [SobreMimComponent]
})
export class SobreMimModule { }
