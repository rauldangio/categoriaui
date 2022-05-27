import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriacomponentesComponent } from './categoriacomponentes/categoriacomponentes.component';

const routes: Routes = [
  {path:'', component: CategoriacomponentesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
