import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCommonModule, MatToolbarModule, MatButtonModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class CoreModule { }
