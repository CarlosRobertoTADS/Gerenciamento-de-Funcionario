import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaComponent } from './view/pessoa/pessoa.component';
import { PessoaCadastarComponent } from './view/pessoa-cadastrar/pessoa-cadastrar.component';

const routes: Routes = [
  { path: '', redirectTo: 'pessoa', pathMatch: 'full' },
  { path: 'pessoa', component: PessoaComponent },
  { path: 'new-pessoa', component: PessoaCadastarComponent },



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
