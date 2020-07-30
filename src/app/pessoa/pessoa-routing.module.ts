import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PessoaCadastroComponent} from './pessoa-cadastro/pessoa-cadastro.component'

const routes: Routes = [
  { path: "", component: PessoaCadastroComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
