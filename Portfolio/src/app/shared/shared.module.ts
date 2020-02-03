import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule, MatButtonModule } from '@angular/material';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    MatCommonModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [NotFoundComponent]
})
export class SharedModule { }
