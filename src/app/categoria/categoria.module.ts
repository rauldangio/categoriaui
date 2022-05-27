import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriacomponentesComponent } from './categoriacomponentes/categoriacomponentes.component';


@NgModule({
  declarations: [
    CategoriacomponentesComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule
  ]
})
export class CategoriaModule { }
