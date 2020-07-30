import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login-component/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuarioModule } from './usuario/usuario.module';


const routes: Routes = [
  { path: "login", loadChildren: () => import("./login/login.module").then(l => l.LoginModule) },
  { path: "", loadChildren: () => import("./inicio/inicio.module").then(i => i.InicioModule)},
  { path: "signIn", loadChildren: () => import("./pessoa/pessoa.module").then(p => p.PessoaModule)},
  { path: "listar/usuarios", loadChildren: () => import("./usuario/usuario.module").then(u => u.UsuarioModule)},
  { path: "**", redirectTo: "/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
